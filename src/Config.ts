export default interface Config {
  name: string;
  version: string;
};

export class Player {
  health: number = 100;

  damage(value: number): void {
    this.health -= value;
  }
};
