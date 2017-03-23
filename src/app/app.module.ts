import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';

import { WeatherService } from './services/weather.service';
import { ProfileService } from './services/profile.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        WeatherItemComponent,
        WeatherListComponent,
        WeatherSearchComponent
    ],
    bootstrap: [AppComponent],
    providers: [WeatherService, ProfileService]
})

export class AppModule {}
