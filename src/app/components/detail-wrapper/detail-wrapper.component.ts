import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-wrapper.component.html',
  styleUrls: ['./detail-wrapper.component.scss'],
})
export class DetailWrapperComponent {
  @Input() selector: string = '';
}
