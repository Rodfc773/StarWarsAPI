import { PrismaClient } from '@prisma/client';

import { Repository } from './interface/Repository';
import { User } from 'src/models/User';

const prisma = new PrismaClient();
export class UserRepository implements Repository<User> {
  async findOne(email: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    return new User(user.name, user.email, user.password, user.nickname);
  }
  async create(data: User): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        nickname: data.nickname,
      },
    });

    return new User(
      newUser.name,
      newUser.email,
      newUser.password,
      newUser.nickname,
    );
  }
  async update(data: User, userEmail: string): Promise<User> {
    const userToBeUpdated = await prisma.user.update({
      where: { email: userEmail },
      data: { name: data.name, email: data.email, nickname: data.nickname },
    });

    return new User(
      userToBeUpdated.name,
      userToBeUpdated.email,
      userToBeUpdated.password,
      userToBeUpdated.nickname,
    );
  }
  async delete(email: string): Promise<User> {
    const userDeleted = await prisma.user.delete({
      where: { email: email },
    });

    return new User(
      userDeleted.name,
      userDeleted.email,
      userDeleted.password,
      userDeleted.nickname,
    );
  }
  async findall(): Promise<User[]> {
    const usersFromDb = await prisma.user.findMany();

    return usersFromDb.map(
      (userData) =>
        new User(
          userData.name,
          userData.email,
          userData.password,
          userData.nickname,
        ),
    );
  }
}
