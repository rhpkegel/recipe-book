import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, search: string|null): string {
    if(!search){
      return text;
    }
    let result = text;
    let searchTerms = search.trim().split(/\s+/)
    searchTerms.forEach(term => {
      result = result.replace(new RegExp(`${term}(?![^\s]+>)`, 'i'), `<span class="highlight">${term}</span>`);
    })
    return result;
  }
}
