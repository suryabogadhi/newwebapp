import { Component } from '@angular/core';
import { OneserviceService } from './oneservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Surya-app';
  constructor( private servedata: OneserviceService){

  }







}
