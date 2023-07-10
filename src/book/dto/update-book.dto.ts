import { Category } from "../schemas/book.schema";

export class UpdateBookDto{
    readonly title:String;
    readonly description:String;
    readonly author:String;
    readonly price:number;
    readonly category:Category;

}