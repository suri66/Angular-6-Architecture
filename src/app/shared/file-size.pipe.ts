import { Pipe, PipeTransform } from '@angular/core';

// <!-- 2.02MB -->
// {{ file.size | filesize }}

@Pipe({
  name: 'fileSize'
})

export class FileSizePipe implements PipeTransform {

  transform(size: number): string {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }

}
