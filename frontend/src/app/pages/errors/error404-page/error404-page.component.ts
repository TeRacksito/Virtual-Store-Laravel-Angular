import { Component } from '@angular/core';
import { FullLayoutComponent } from '../../../components/Layouts/full-layout/full-layout.component';

@Component({
  selector: 'app-error404-page',
  imports: [FullLayoutComponent],
  templateUrl: './error404-page.component.html',
  styleUrl: './error404-page.component.css'
})
export class Error404PageComponent {
  requestedPath: string = window.location.pathname;
}
