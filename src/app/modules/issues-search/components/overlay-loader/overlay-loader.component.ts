import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-overlay-loader',
  templateUrl: './overlay-loader.component.html',
  styleUrls: ['./overlay-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayLoaderComponent {
  @Input() isLoading: boolean;
}
