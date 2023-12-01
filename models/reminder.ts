export default class Reminder {
  id: number;
  IsComplete: boolean;

  constructor(public title: string) {
    this.id = Date.now();
    this.IsComplete = false;
  }
}
