import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

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
import { SkillviewComponent } from './skilist/skillview/skillview.component';
import { SkilleditComponent } from './skilist/skilledit/skilledit.component';
import { SkilltestComponent } from './skilist/skilltest/skilltest.component';
import { AppRoutesModule } from './approutes.module';
import { NotfoundComponent } from './notfound/notfound.component';

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
    SkillviewComponent,
    SkilleditComponent,
    SkilltestComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [OneserviceService,SillserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
