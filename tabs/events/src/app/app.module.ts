import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel.ts';
import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs.ts';

@NgModule({
    declarations: [AppComponent, jqxPanelComponent, jqxTabsComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        