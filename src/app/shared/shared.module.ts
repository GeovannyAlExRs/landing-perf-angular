import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImgComponent } from './components/img/img.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [TimeAgoPipe, ImgComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [TimeAgoPipe, ImgComponent],
})
export class SharedModule {}
