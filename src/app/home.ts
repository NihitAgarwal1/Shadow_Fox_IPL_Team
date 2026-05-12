import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html'
})
export class HomeComponent implements AfterViewInit {
  protected readonly title = signal('IPL_Team');

  ngAfterViewInit() {
    const images = document.querySelectorAll<HTMLImageElement>('.trophy-image, .jersey-spin');
    images.forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        this.removeWhiteBackground(img);
      } else {
        img.addEventListener('load', () => this.removeWhiteBackground(img));
      }
    });
  }

  private removeWhiteBackground(img: HTMLImageElement) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const threshold = 225;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      if (r > threshold && g > threshold && b > threshold) {
        data[i + 3] = 0;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    img.src = canvas.toDataURL('image/png');
  }
}
