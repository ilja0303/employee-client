export class Employee{
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public location: string,
    public birthday: Date,
    public email: string,
    public telephone:string,
    public created_at:Date,
    public updated_at:Date
  ) {}
}
