import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../../models/serie';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe({
      next: (data) => {
        this.series = data;
        this.calculateAverageSeasons();
      },
      error: (error) => {
        console.error('Error al cargar las series:', error);
      }
    });
  }

  calculateAverageSeasons(): void {
    if (this.series.length > 0) {
      const total = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.averageSeasons = total / this.series.length;
    }
  }
}
