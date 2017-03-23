import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        WeatherItemComponent,
        WeatherListComponent,
        WeatherSearchComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
