import { IMAGEVIEWER_CONFIG, ImageViewerConfig } from './imageviewer/imageviewer.config';
import { Component } from '@angular/core';

const MY_IMAGEVIEWER_CONFIG: ImageViewerConfig = {
  rotateStepper: true,
  zoomInButton: { tooltip: 'Aproximar' },
  zoomOutButton: { tooltip: 'Distanciar' },
  rotateLeftButton: { tooltip: 'Girar esquerda' },
  rotateRightButton: { tooltip: 'Girar direita' },
  resetButton: { tooltip: 'Resetar' },
  buttonStyle: {
    bgStyle: '#B71C1C',
    borderWidth: 2,
    borderStyle: '#FFFFFF',
    iconStyle: '#FFFFFF'
  }
};

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: IMAGEVIEWER_CONFIG,
      useValue: MY_IMAGEVIEWER_CONFIG
    }
  ]
})
export class AppComponent {
  canvasWidth = 800;
  canvasHeight = 600;
}
