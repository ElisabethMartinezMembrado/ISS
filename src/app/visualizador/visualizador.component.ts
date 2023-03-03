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
      switchMap(() => this.http.get<any>('http://api.open-notify.org/iss-now.json')),
      catchError(error => {
        // maneja el error
        return throwError(error);
      })
    ).subscribe(data => {
      this.issPosition = [data.iss_position.latitude, data.iss_position.longitude];
    })
  }



}







