import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  courseid = "";
  coursename = "";
  coursefee = "";

  coursepaid = "";
  coursejoin = "";
  courseresult = "";

  constructor(private router:Router, private routepaths:ActivatedRoute) { }


  ngOnInit() {
    this.courseid   = this.routepaths.snapshot.params['cid'];
    this.coursename = this.routepaths.snapshot.params['cname'];
    this.coursefee  = this.routepaths.snapshot.params['cfee'];
 
    this.coursepaid = this.routepaths.snapshot.queryParams['join'];
    this.coursejoin = this.routepaths.snapshot.queryParams['paid'];
 
    this.courseresult = this.routepaths.snapshot.fragment;


    //subscribe for find params
    this.routepaths.params.subscribe((para:Params)=>{
        this.courseid = para['cid'];
        this.coursename = para['cname'];
    });


    this.routepaths.queryParams.subscribe((queryParams:any) => {
      this.coursepaid = queryParams.join;
      this.coursejoin = queryParams.paid;
     });

     this.routepaths.fragment.subscribe((frag:any) => {
        this.courseresult = frag;
    });

     // this.obsCombined = Observable.combineLatest(this.route.params, this.route.queryParams, (params, qparams) => ({params, qparams}));
    //this.obsCombined.subscribe(ap => {
//console.log(ap.params['type']);
       // console.log(ap.qparams['page']);
   // });
  }


   getparams(){
      this.router.navigate(['/services',8,'navparams',20000]);
      //this.router.navigate(['contact'], {relativeTo: this.route});
   }

   getquerys(){
    this.router.navigate(['/services'], { queryParams: { join: 'no',paid:'yes'} });
   } 

   getfragments(){
    this.router.navigate(['/services'], { fragment: 'confirmed' });  
   }
   

   getall(){
      this.router.navigate(['/services',8,'navparams',20000],{ queryParams: { join: 'no',paid:'yes'} });
      //this.router.navigate(['contact'], {relativeTo: this.route});
   }    






}
