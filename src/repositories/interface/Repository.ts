export interface Repository<T> {
  findall(): Promise<T[]>;
  findOne(name: string): Promise<T>;
  create(data: T): Promise<T>;
  update(data: T, name: string): Promise<T>;
  delete(name: string): Promise<T>;
}
