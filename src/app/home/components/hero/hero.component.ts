import { Component } from '@angular/core';
import { ImageConfig } from 'src/app/shared/types/image.config';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public imageConfig = ImageConfig;
}
