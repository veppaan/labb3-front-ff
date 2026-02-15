export interface Admin {
    id: string,
    username: string,
    firstname: string
}

export interface Product {
    _id: string,
    name: string,
    description: string,
    articleNumber: number,
    price: number,
    stock: number
}

export interface NewProduct {
    name: string,
    description: string,
    articleNumber: number,
    price: number,
    stock: number
}

export interface LoginCredentials {
    username: string,
    password: string
}

export interface AuthResponse {
    admin: Admin,
    token: string
}

export interface AuthContextType {
    admin: Admin | null,
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => void;
}