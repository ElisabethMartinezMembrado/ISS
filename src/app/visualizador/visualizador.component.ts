import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { interval, Subscription, throwError } from 'rxjs';

const intervalTime = 3000; // tiempo en milisegundos
const interval$ = interval(intervalTime);
declare const navigator: any;


@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css'],
})
export class VisualizadorComponent {
  issPosition: number[] = [];
  localitationUser: number[] = [];
  latitude: number;
  longitude: number;

  constructor(private http: HttpClient) { }


  ngOnInit() {

    interval$.pipe(
      switchMap(() => this.http.get<any>('https://api.wheretheiss.at/v1/satellites/25544')),
      catchError(error => {
        // maneja el error
        return throwError(error);
      })
    ).subscribe(data => {
      this.issPosition = [data.latitude, data.longitude];
      console.log(`Estoy extrayendo los datos nuevos:`, data.latitude, data.longitude)
    })
  }



}







