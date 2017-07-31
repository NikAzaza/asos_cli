export class Product{
    /*id: number;
    name: string;
    price: number;
    images: string[];

    type: string;
    brand: string;
    size: string;
    color: string;*/

    constructor (private id: number, private name:string,
                 private price:number, private images:string[],
                 private type: string, private brand:string,
                 private size:string, private color:string) {
    }
    
    
}