import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationsComponent } from './communications/communications.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DatalinkComponentComponent } from './datalink-component/datalink-component.component';
import { GeneralComponent } from './general/general.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { SmsComponent } from './sms/sms.component';
import { WaypointComponent } from './waypoint/waypoint.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'datalink-component' },
  { path: 'datalink-component', component: DatalinkComponentComponent },
  { path: 'sms-component', component: SmsComponent },
  { path: 'configuration-component', component: ConfigurationComponent },
  { path: 'communications-component', component: CommunicationsComponent },
  { path: 'general-component', component: GeneralComponent },
  { path: 'waypoint-component', component: WaypointComponent },
  { path: '**', component: PageNotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
