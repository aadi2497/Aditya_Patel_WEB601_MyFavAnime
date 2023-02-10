import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'fliter'
})
export class FliterPipe implements PipeTransform {

  transform(content: Content[]): any {
    if(!content){
      return content;
    }
    return content.filter((item: Content) => {
    //return item.type?.length;
    return item.type?.length || item.type == 'anime' || item.type == 'manga';
  });
 }
}
