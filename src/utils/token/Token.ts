import Cookies from "js-cookie";
export function getBearerToken() {
    return `Bearer ${Cookies.get("accessToken")}`;
}
