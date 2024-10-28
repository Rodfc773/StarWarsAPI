export abstract class Service<T> {
  protected repository;
  protected validator;

  abstract getAll(): Promise<T[]>;
  abstract findOne(name: string): Promise<T>;
  abstract createOne(data: T): Promise<T>;
  abstract deleteOne(name: string): Promise<T>;
  abstract updateOne(name: string, data: T): Promise<T>;
}
