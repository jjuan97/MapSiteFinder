import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

// Service
import { MarkersService } from 'src/app/services/markers.service';

// Class
import { Marker } from 'src/app/models/marker';
import { SiteService } from 'src/app/services/site.service';
import { Site } from 'src/app/models/site';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public sites: Site[];
  public selectSites: Site[];

  public dropdownActive: boolean = false;

  // Search Box
  control = new FormControl();
  filteredSites: Observable<Site[]> | undefined;
  public select_site!: Site;

  constructor(private markersService: MarkersService, private siteService: SiteService){
    this.sites = [];
    this.selectSites = [];
  }

  ngOnInit(): void {
    this.getAllSites();

    // Search box pipe
    this.filteredSites = this.control.valueChanges.pipe(
      startWith<string | Site>(''),
      map(value => typeof value === 'string' ? value : value.city),
      map(value => this._filter(value || '')),
    );
  }

  // Search Function
  private _filter(value: string): Site[] {
    const filterValue = this._normalizeValue(value);
    return this.sites.filter(site => this._normalizeValue(site.city).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  public displayFn(site: Site): string {
    if (site) {
      return site.city;
    }
    else {
      return "";
    }
  }

  // Client functions
  public cleanMarkers(): void {
    this.selectSites = [];
    this.markersService.clearMarkers();
  }

  // Marker and site control
  public addMarker(lat: number, lng: number): void {
    let marker = new Marker(lng, lat);
    this.markersService.addMarker(marker);
  }

  // Site service functions
  public selectSite(site: Site): void {
    console.log(site);
    this.siteService.getSiteById(site.id).subscribe({
      next: (response: Site) => {
        this.selectSites.push(response)
        this.addMarker(response.lat, response.lng); // Add new marker from the search site
      },
      error: (error: HttpErrorResponse) => {
        console.log(error); // TODO: Manage Error
      }
    })
  }

  public getAllSites(): void {
    this.siteService.getAllSites().subscribe({
      next: (response: Site[]) => {
        this.sites = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error); // TODO: Manage Error
      }
    });
  }

}