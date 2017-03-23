import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';

import { WeatherService } from './services/weather.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        WeatherItemComponent,
        WeatherListComponent,
        WeatherSearchComponent
    ],
    bootstrap: [AppComponent],
    providers: [WeatherService]
})
export class AppModule {
}
