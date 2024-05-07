import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
    exp: number;
    iat: number;
    userType: string;
}

const decodeToken = (token: string): DecodedToken | null => {
    try {
        return jwtDecode<DecodedToken>(token);
    } catch (error) {
        return null;
    }
};

const isTokenExpired = (token: string): boolean => {
    const decoded = decodeToken(token);
    if (!decoded) {
        return true;
    }
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
};
const isTokenTypeNone = (token: string): boolean => {
    const decoded = decodeToken(token);
    console.log(decoded);

    if (!decoded) {
        return true;
    }
    return decoded.userType === "none";
};

export const isUserAuthorized = (): boolean => {
    const accessToken = Cookies.get("jwt-access");
    if (!accessToken) {
        return false;
    }
    return !isTokenExpired(accessToken);
};

export const isUserHasProfile = (): boolean => {
    const accessToken = Cookies.get("jwt-access");
    if (!accessToken) {
        return false;
    }
    return !isTokenTypeNone(accessToken);
};
