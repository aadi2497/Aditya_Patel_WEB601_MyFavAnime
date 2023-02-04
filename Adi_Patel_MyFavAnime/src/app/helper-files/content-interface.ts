import { Optional } from "@angular/core";

export interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string [];
}