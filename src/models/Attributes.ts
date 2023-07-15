export class Attributes<T extends object> {
  constructor(
    private readonly userdata: T
  ) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.userdata[key];
  }

  set(updateData: T): void {
    Object.assign(this.userdata, updateData);
  }
}