export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    access: string;
    refresh: string;
}
export interface RegisterRequest {
    email: string;
    password: string;
    confirmationPassword: string;
}

export interface RegisterResponse {
    access: string;
    refresh: string;
}
