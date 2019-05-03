export class Task {
    public name: string;
    public category: string;
    public dateStart: string;
    public tStatus: string;
    public dateEnd?: string;

    constructor(name: string, category: string, dateStart: string, tStatus: string, dateEnd?: string) {
      this.name = name;
      this.category = category;
      this.dateStart = dateStart;
      this.tStatus = tStatus;
      this.dateEnd = dateEnd;
    }
}
