import { PrismaClient } from '@prisma/client';

import { Repository } from './interface/Repository';
import { UserDTO } from '../dtos/User';

const prisma = new PrismaClient();
export class UserRepository implements Repository<UserDTO> {
  async findOne(nickname: string): Promise<UserDTO> {
    const user = await prisma.user.findUnique({
      where: { nickname: nickname },
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
  async create(data: UserDTO): Promise<UserDTO> {
    const newUser = await prisma.user.create({
      data: data.fullUser(),
    });

    return new UserDTO(newUser);
  }
  async update(data: UserDTO, UserDTOEmail: string): Promise<UserDTO> {
    const userUpdated = await prisma.user.update({
      where: { email: UserDTOEmail },
      data: data,
    });

    return new UserDTO(userUpdated);
  }
  async delete(nickname: string): Promise<UserDTO> {
    const userDeleted = await prisma.user.delete({
      where: { nickname: nickname },
    });

    return new UserDTO(userDeleted);
  }
  async findall(): Promise<UserDTO[]> {
    const usersFromDb = await prisma.user.findMany();

    return usersFromDb.map((userFromDB) => new UserDTO(userFromDB));
  }
}
