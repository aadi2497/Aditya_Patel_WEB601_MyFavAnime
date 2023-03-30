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
    return content.filter((content) => {
    //return item.type?.length;
    return content;
  });
 }
}
