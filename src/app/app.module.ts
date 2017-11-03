import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ServicesComponent } from './services/services.component';
import { RouteComponent } from './route/route.component';
import { MenurouteComponent } from './menuroute/menuroute.component';
import { ServiceoutComponent } from './serviceout/serviceout.component';
import { OneserviceService } from './oneservice.service';
import { SkillComponent } from './skill/skill.component';
import { SkilistComponent } from './skilist/skilist.component';
import { SillserviceService } from './sillservice.service';


const myrouteurls :Routes = [
 
  {path:'',component:HomeComponent},

  {path:'services',component:ServicesComponent},
  {path:'services/:cid',component:ServicesComponent},
  {path:'services/:cid/:cname',component:ServicesComponent},
  {path:'services/:cid/:cname/:cfee',component:ServicesComponent},

  {path:'route',component:RouteComponent},
  {path:'route/:cid',component:RouteComponent},
  {path:'route/:cid/:cname',component:RouteComponent},
  {path:'route/:cid/:cname/:cfee',component:RouteComponent},

  {path:'skill',component:SkillComponent},
  
  {path:'skillist',component:SkilistComponent},
  {path:'skillist/:name/:',component:SkilistComponent},
  {path:'skillist/:name/:sname',component:SkilistComponent},
  {path:'skillist/:name/:sname/:srate',component:SkilistComponent},
  {path:'skillist/:name/:sname/:srate/:sdes',component:SkilistComponent}



]




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ServicesComponent,
    RouteComponent,
    MenurouteComponent,
    ServiceoutComponent,
    SkillComponent,
    SkilistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myrouteurls)
  ],
  providers: [OneserviceService,SillserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
