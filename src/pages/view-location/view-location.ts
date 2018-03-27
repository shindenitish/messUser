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
        zoom: 16,
        draggable: true,
        center: mylocation
      });
    },(err)=>{
      alert(err.message);
    }).catch((err)=>{
      alert(err.message);
    });
  
    let watch = this.geolocation.watchPosition();
    
    watch.subscribe((data) => {

      let marker = new google.maps.Marker({
        position: this.map.getCenter(),
        map: this.map,
        draggable: true,
        animation: google.maps.Animation.DROP,
      });

      //marker.setPosition(this.map.getCenter());

    // marker.bindTo('position', this.map, 'center');
    //marker.setPosition( this.map.getCenter());
    //   this.deleteMarkers();
    // let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
    //   let image = 'assets/imgs/avatar.png';
      //this.addMarker(updatelocation);
    //   this.setMapOnAll(this.map);
    });
  }

  addMarker() {

    let marker = new google.maps.Marker({
      position: this.map.getCenter(),
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
    });
    
    let content = "<h4>Information!</h4>";         
 
    this.addInfoWindow(marker, content);
  }
  
  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });   
  }
}