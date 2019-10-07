import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MozleyHeaderComponent } from './mozley-header/mozley-header.component';
import { MozleyFooterComponent } from './mozley-footer/mozley-footer.component';
import { MozleyMainPanelComponent } from './mozley-main-panel/mozley-main-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    MozleyHeaderComponent,
    MozleyFooterComponent,
    MozleyMainPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
