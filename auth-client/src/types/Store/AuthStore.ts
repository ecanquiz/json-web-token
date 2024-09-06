export interface AuthStore {
    user: {
        isAdmin?: boolean
    }
    pending: boolean
    error: object|string
    //accessToken: string
}
