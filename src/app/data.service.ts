import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FrameworkInfo } from './models'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getList(): Observable<FrameworkInfo[]> {
    return of([
      {framework: "Vue", description: "Vue Framework", stars: 166443, released: 2014},
      {framework: "React", description: "React Framework", stars: 150793, released: 2013},
      {framework: "Angular", description: "Angular Framework", stars: 62342, released: 2016},
      {framework: "Backbone", stars: 27647, released: 2010},
      {framework: "Ember", stars: 21471, released: 2011}
    ]).pipe(
      delay(Math.random() * 1000)
    );
 }
}