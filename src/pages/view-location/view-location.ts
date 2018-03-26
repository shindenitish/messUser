import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;
 
@Component({
  selector: 'page-view-location',
  templateUrl: 'view-location.html'
})
export class ViewLocationPage{
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers = [];
 
  constructor(public navCtrl: NavController, 
  public platform: Platform,
  private geolocation: Geolocation) {
    platform.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true })
    .then((resp) => {
      let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
        
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        center: mylocation
      });
    },(err)=>{
      alert(err.message);
    }).catch((err)=>{
      alert(err.message);
    });
    
    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   this.deleteMarkers();
    //   let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
    //   let image = 'assets/imgs/avatar.png';
    //   this.addMarker(updatelocation,image);
    //   this.setMapOnAll(this.map);
    // });
  }

  addMarker(location, image) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: image
    });
    this.markers.push(marker);
  }
  
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  
  clearMarkers() {
    this.setMapOnAll(null);
  }
  
  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
}