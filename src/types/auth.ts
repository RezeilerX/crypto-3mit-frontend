export interface User {
  _id: string
  email: string
  name: string
  nickname: string
}

export interface AuthData {
  user: User
  token: string
}

export interface AuthContext {
  authData: AuthData
  setAuthData: Function
}
