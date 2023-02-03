import { Content } from "./content-interface";

export class ContentList {
    private _items: Content [];

    constructor() {
        this._items = [];
    }

    getItems(): Content [] {
        return this._items;
    }

    addFunction(contentItem: Content) {
        return this._items.push(contentItem);
    }

    getLength(){
        return this._items.length;
    }

    printIndex(index: number) {

        if (index < 0 || index >= this._items.length) {
            return '<p>Error: index out of range</p>';
          }

        let myanime = `<p>Title: ${this._items[index].title}</p>
        <p>Description: ${this._items[index].description}</p><p>Creator: ${this._items[index].creator}</p><hr>`;
        if (this._items[index].imgURL) {
            myanime += `<img src='${this._items[index].imgURL}' alt='${this._items[index].type}'>`;
          }
          if (this._items[index].type) {
            myanime += `<p>Type: ${this._items[index].type}</p>`;
          }
        return myanime;
    }
}