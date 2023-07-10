import { Category } from "../schemas/book.schema";

export class CreateBookDto{
    readonly title:String;
    readonly description:String;
    readonly author:String;
    readonly price:number;
    readonly category:Category;

}