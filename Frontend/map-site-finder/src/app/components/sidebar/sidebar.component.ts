import { Component, OnInit } from '@angular/core';

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

  siteData!: string; // Pipe to search (ng2Search)
  public dropdownActive: boolean = false;

  constructor(private markersService: MarkersService, private siteService: SiteService){
    this.sites = [];
    this.selectSites = [];
  }

  ngOnInit(): void {
    this.getAllSites();
  }

  // Client functions
  public showDropdown(key:string): void {
    if (key){
      this.dropdownActive = true;
    }
    else {
      this.dropdownActive = false;
    }
  }

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
