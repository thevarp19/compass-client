"use client";
import jwtService from "@/lib/jwt";
import { GetActorDetailResponse } from "@/modules/actor/types";
import { getProfile, verifyAuth } from "@/modules/auth/api";
import {
    FC,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface AuthContextType {
    isAuth: boolean;
    isHasProfile: boolean | undefined;
    avatar: string | undefined;
    handleLogin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [isAuth, setAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [profileData, setProfileData] = useState<
        GetActorDetailResponse | undefined
    >();
    const handleLogin = async () => {
        try {
            const token = jwtService.getAccessToken();
            await verifyAuth(token);
            setAuth(true);
        } catch (error) {
            console.error(error);
            setAuth(false);
        }
    };
    useEffect(() => {
        handleLogin();
    }, []);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!isAuth) return;

            setIsLoading(true);
            try {
                const { data } = await getProfile();
                setProfileData(data);
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, [isAuth]);

    // if (isLoading) {
    //     return <Loading className="h-screen" />;
    // }

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                isHasProfile: profileData?.abstract_user_data.type !== "none",
                avatar: profileData?.abstract_user_data.avatar,
                handleLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
