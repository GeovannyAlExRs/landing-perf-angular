import { Component } from '@angular/core';
import { ImageConfig } from 'src/app/shared/types/image.config';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  public imageConfig = ImageConfig;
}
