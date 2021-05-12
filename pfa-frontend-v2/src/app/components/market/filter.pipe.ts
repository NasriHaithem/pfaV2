import { Pipe, PipeTransform } from '@angular/core';
const { isArray } = Array;

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
range: string[] = ['aaa','aaab','bbbb','eebb','eeee',"zzzz","dddde","ffff","ffff","aaa","rrrr",'tttt',
                      "ssss","cccc","qqqq","gggg","qqqq","wwww","vvvvz"];
  
  transform(range: string[], find: string): string[] {
    if (!range) return [];
    if (!find) return range;
    find = find.toLowerCase();
    return search(range, find);
    
  }
}

function search(inputArray: any[], query: string) {
    return inputArray.filter( (elem) => elem.includes(query))

}
