import { PrismaClient } from '@prisma/client';

import { Repository } from './interface/Repository';
import { UserDTO } from 'src/dtos/User';

const prisma = new PrismaClient();
export class UserDTORepository implements Repository<UserDTO> {
  async findOne(email: string): Promise<UserDTO> {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        nickname: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return new UserDTO(user);
  }
  async create(data): Promise<UserDTO> {
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        nickname: data.nickname,
      },
    });

    return new UserDTO(newUser);
  }
  async update(data: UserDTO, UserDTOEmail: string): Promise<UserDTO> {
    const userUpdated = await prisma.user.update({
      where: { email: UserDTOEmail },
      data: { name: data.name, email: data.email, nickname: data.nickname },
    });

    return new UserDTO(userUpdated);
  }
  async delete(email: string): Promise<UserDTO> {
    const userDeleted = await prisma.user.delete({
      where: { email: email },
    });

    return new UserDTO(userDeleted);
  }
  async findall(): Promise<UserDTO[]> {
    const usersFromDb = await prisma.user.findMany();

    return usersFromDb.map((userFromDB) => new UserDTO(userFromDB));
  }
}
