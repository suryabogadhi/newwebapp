import { Directive, OnInit, ElementRef, Input  } from '@angular/core';

@Directive({
  selector: '[appMaindirective]'
})
export class MaindirectiveDirective implements OnInit{

  mycolour = "#ccc";

  


  

  constructor( private mydivref:ElementRef) {
    this.mydivref.nativeElement.style.background = this.mycolour;
    this.mydivref.nativeElement.style.color = "#000";
    this.mydivref.nativeElement.style.padding = "10px";
   

   


   }


  ngOnInit(){
  }




}
