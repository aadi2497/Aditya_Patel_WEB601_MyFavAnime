import { Optional } from "@angular/core";

export interface Content {
    id?: number | null;
    title: string;
    description: string;
    creator?: string;
    imgURL?: string;
    type?: string;
    tags?: string [];
}