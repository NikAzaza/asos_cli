export class Product{
    constructor (private id: number, private name:string,
                 private price:number, private images:string[],
                 private type: string, private brand:string,
                 private size:string, private color:string) {
    }
}