import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;
 
@Component({
  selector: 'page-view-location',
  templateUrl: 'view-location.html'
})
export class ViewLocationPage{
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  lat: any;
  lng: any;
     
  constructor(public navCtrl: NavController,
  public navParams: NavParams, 
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
      
      let marker = new google.maps.Marker({
        position: this.map.getCenter(),
        map: this.map,
        // draggable: true,
        animation: google.maps.Animation.DROP,
      });

      this.lat=marker.getPosition().lat();
      this.lng=marker.getPosition().lng();

      google.maps.event.addListener(this.map, 'center_changed', () => {
        this.lat=marker.getPosition().lat();
        this.lng=marker.getPosition().lng();
      });

      this.addInfoWindow(marker, "<h4>"+this.navParams.get('messName')+"</h4>");

      marker.bindTo('position', this.map, 'center');

    },(err) =>{
      alert(err.message);
    }).catch((err) =>{
      alert(err.message);
    });

    // let watch = this.geolocation.watchPosition();    
    // watch.subscribe((data) => { });
  }
  
  addInfoWindow(marker, content){ 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });   
  }

  addLocation(){
    console.log("Co-ordinates:"+this.lat+", "+this.lng);
  }
}