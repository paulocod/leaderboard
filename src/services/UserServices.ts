import { type UserRepository } from '../../repositories/UserRepository'
import { createHash } from 'node:crypto'

interface UserProps {
  name: string
  email: string
  password: string
}
    
}
export class UserService {
  constructor (
    private userRepository: UserRepository
  ) {}

  async createUser ({ name, email, password }: UserProps) {
    if (!email) {
      throw new Error('Email is required')
    }
    const emailExists = await this.userRepository.findUserEmail(email)

    if (emailExists) {
      throw new Error('Esse email ja esta cadastrado')
    }
    const passwordHash = createHash('sha256').update(password).digest('hex')

    const user = await this.userRepository.createUser({ name, email, passwordHash })
    return user
  }

  async detailUser (id: string) {
    const user = await this.userRepository.findOneUser(id)
    if (!user) {
      throw new Error('Não existe nenhum usuario no banco de dados')
    }
    return user
  }

  async allUsers () {
    const users = await this.userRepository.findAllUsers()
    if (!users.length) {
      throw new Error('Não existe nenhum usuario no banco de dados')
    }
    return users
  }
}