import { Optional } from "@angular/core";

export interface Content {
    //clone(): Content | undefined;
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string [];
    [key: string]: any;
}