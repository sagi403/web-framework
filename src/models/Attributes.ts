export class Attributes<T extends object> {
  constructor(private data: T) {}

  get(key: string): number | string {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
