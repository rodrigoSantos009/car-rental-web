export interface IUser {
  id: string
  name: string
  email: string
  password: string
}

export interface IUserSignin {
  id?: string
  name?: string
  email?: string
  token?: string
}

export interface IContext extends IUserSignin {
  authenticate: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean | undefined>
  logout: () => void
} 

export interface IAuthProvider {
  children: JSX.Element
} 