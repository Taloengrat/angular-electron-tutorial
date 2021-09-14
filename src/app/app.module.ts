import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmsComponent } from './sms/sms.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DatalinkComponentComponent } from './datalink-component/datalink-component.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CommunicationsComponent } from './communications/communications.component';
import { GeneralComponent } from './general/general.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SmsComponent,
    PageNotfoundComponent,
    DatalinkComponentComponent,
    ConfigurationComponent,
    CommunicationsComponent,
    GeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
