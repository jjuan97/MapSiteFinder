import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Marker } from '../models/marker';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {
  private markers: Marker[] = [];

  private myMarkers = new BehaviorSubject<Marker[]>( this.markers );

  myMarkers$ = this.myMarkers.asObservable();



  constructor() { }

  addMarker (marker : Marker) {
    this.markers.push(marker);
    this.myMarkers.next(this.markers);
  }

  getAllMarkers(): Marker[]{
    return this.markers;
  }

  clearMarkers() {
    this.markers = [];
    this.myMarkers.next(this.markers);
  }
}
