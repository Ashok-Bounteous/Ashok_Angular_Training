import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe'
})
export class MyCustomPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().concat("__My - CustomPipeData"); // Example: Convert string to lowercase
  }
}
