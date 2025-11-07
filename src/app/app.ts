import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SerieListComponent } from './components/serie-list/serie-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SerieListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TallerAngular');
}
