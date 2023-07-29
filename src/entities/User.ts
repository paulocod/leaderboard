import { Entity } from "../entities/BaseEntity.js"

interface UserProps {
  name: string
  email: string
  telephone: Number
  password: string
  matchPassword: string
  createdAt: Date
  updatedAt: Date
  deleted: boolean
}
export class User extends Entity<UserProps>{
  private constructor(props: UserProps, id?: string) {
    super(props, id)
  }

  static create(props: UserProps, id?: string) {
    const user = new User(props, id)
    return user
  }
}