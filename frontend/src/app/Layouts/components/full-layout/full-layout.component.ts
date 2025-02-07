import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-full-layout',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.css',
})
export class FullLayoutComponent {}
