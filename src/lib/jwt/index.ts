import Cookies from "js-cookie";

export type JwtProperties = "access" | "refresh";

export interface JwtType {
    access: string;
    refresh: string;
}

const setJwtProperty = (propertyName: JwtProperties, propertyValue: string) => {
    Cookies.set(`jwt-${propertyName}`, propertyValue, { expires: 7 });
};

const getJwt = (): JwtType => {
    const accessToken = Cookies.get("jwt-access");
    const refreshToken = Cookies.get("jwt-refresh");
    return {
        access: accessToken || "",
        refresh: refreshToken || "",
    };
};

const setAccessToken = (accessToken: string) => {
    setJwtProperty("access", accessToken);
};

const setRefreshToken = (refreshToken: string) => {
    setJwtProperty("refresh", refreshToken);
};

const getAccessToken = () => {
    return getJwt().access;
};

const getRefreshToken = () => {
    return getJwt().refresh;
};

const saveJwt = (jwt: JwtType) => {
    const accessToken = Cookies.get("jwt-access");
    const refreshToken = Cookies.get("jwt-refresh");
    setJwtProperty("access", jwt.access || accessToken || "");
    setJwtProperty("refresh", jwt.refresh || refreshToken || "");
};

const removeJwt = () => {
    Cookies.remove("jwt-access");
    Cookies.remove("jwt-refresh");
};

const jwtService = {
    setAccessToken,
    setRefreshToken,
    getAccessToken,
    getRefreshToken,
    saveJwt,
    removeJwt,
};

export default jwtService;
