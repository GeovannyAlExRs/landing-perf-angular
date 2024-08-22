import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
})
export class ImgComponent {
  @Input() public src = 'src';
  @Input() public alt = 'alt';
  @Input() public width = 50;
  @Input() public height = 50;
}
