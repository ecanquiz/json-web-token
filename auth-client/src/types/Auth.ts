import type { Ref, UnwrapRef } from 'vue'

export interface FormLogin {
    email: string
    password: string
}

export interface StandaloneLogin {
    //pending: Ref<UnwrapRef<boolean>>
    login: (form: FormLogin) => Promise<void>
    //error: Ref<UnwrapRef<object|string>>
}

export interface authUser {
    accessToken: string
}

export interface AuthUserRegister{
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}