import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {SkillComponent} from "./skill/skill.component";
import {RouteComponent} from "./route/route.component";
import {HomeComponent} from "./home/home.component";
import {ServicesComponent} from "./services/services.component";
import {SkilistComponent} from "./skilist/skilist.component";
import {SkillviewComponent} from "./skilist/skillview/skillview.component";
import {SkilleditComponent} from "./skilist/skilledit/skilledit.component";
import {SkilltestComponent} from "./skilist/skilltest/skilltest.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import { CustomdirectiveComponent } from './customdirective/customdirective.component';

const myrouteurls : Routes = [
  {path:'',component:HomeComponent},
  // {path:'', redirectTo:'services', pathMatch:'full'},
  {path:'services',component:ServicesComponent},
  {path:'services/:cid',component:ServicesComponent},
  {path:'services/:cid/:cname',component:ServicesComponent},
  {path:'services/:cid/:cname/:cfee',component:ServicesComponent},

  {path:'route',component:RouteComponent},
  {path:'route/:cid',component:RouteComponent},
  {path:'route/:cid/:cname',component:RouteComponent},
  {path:'route/:cid/:cname/:cfee',component:RouteComponent},

  {path:'skill',component:SkillComponent},
  {path:'skillist',component:SkilistComponent, children:[
    // {path:':name',component:SkillviewComponent},
    {path:':sids/edit',component:SkilleditComponent},
    {path:':sids/view',component:SkillviewComponent}
  ]},

  {path:'skillist/:name/:sname/:srate/:sdes',component:SkilistComponent},
  {path:'skillist/:sids/remove',component:SkilistComponent},

  {path:'directive',component:CustomdirectiveComponent},
  {path:'error', component: NotfoundComponent},
  {path:'**', redirectTo:'error'}
  // {path:'skillist/:name',component:SkilistComponent},
  // {path:'skillist/:name/:sname',component:SkilistComponent},
  // {path:'skillist/:name/:sname/:srate',component:SkilistComponent},
  // {path:'skillist/:name/:sname/:srate/:sdes',component:SkilistComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(myrouteurls)
  ],
  exports:[RouterModule]
})

export class AppRoutesModule{ }
