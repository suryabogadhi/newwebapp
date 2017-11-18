import { Component, OnDestroy, OnInit } from '@angular/core';
import { OneserviceService } from './oneservice.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Surya-app';
  mysubs: Subscription;

  constructor( private servedata: OneserviceService){

  }

  ngOnInit(){
    this.mysubs = this.servedata.myemitFunc.subscribe((myStr)=>{
        console.log(myStr);
    });
  }

  ngOnDestroy(){
    this.mysubs.unsubscribe();
  }

}
