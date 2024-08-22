import { Component } from '@angular/core';
import { ImageConfig } from 'src/app/shared/types/image.config';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss'],
})
export class IntegrationsComponent {
  public imageConfig = ImageConfig;
}
