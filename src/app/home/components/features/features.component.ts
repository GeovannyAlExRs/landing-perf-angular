import { Component } from '@angular/core';
import { ImageConfig } from 'src/app/shared/types/image.config';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  public imageConfig = ImageConfig;
}
