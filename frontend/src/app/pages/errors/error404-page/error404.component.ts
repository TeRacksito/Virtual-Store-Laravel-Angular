import { Component } from '@angular/core';
import { FullLayoutComponent } from '../../../Layouts/components/full-layout/full-layout.component';

@Component({
  selector: 'app-error404-page',
  imports: [FullLayoutComponent],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css'
})
export class Error404PageComponent {
  requestedPath: string = window.location.pathname;
}
