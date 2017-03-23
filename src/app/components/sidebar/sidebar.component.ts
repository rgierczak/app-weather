import { Component, OnInit } from '@angular/core';
import { Profile } from '../../common/profile';
import { WeatherService } from "../../services/weather.service";
import { ProfileService } from "../../services/profile.service";

@Component({
    selector: 'weather-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    profiles: Profile[];
    
    constructor(
        private _profileService: ProfileService, 
        private _weatherService: WeatherService
    ) {}

    private fetchWeatherItem(city: string) {
        this._weatherService
            .searchWeatherData(city)
            .retry()
            .subscribe(
                data => {
                    let item = this._weatherService.buildWeatherItem(data);
                    this._weatherService.addWeatherItem(item);
                }
            )
    }
    
    ngOnInit() {
        this.profiles = this._profileService.getProfiles();
    }
    
    onSaveProfile() {
        let cities = this._weatherService
            .getWeatherItems()
            .map((element) => {
                return element.cityName;
            });
        
        this._profileService.saveProfile(cities);
    }
    
    onLoadProfile(profile: Profile) {
        this._weatherService.clearWeatherItems();
        
        profile.cities.forEach((city) => {
            this.fetchWeatherItem(city);
        });
    }



    onDeleteProfile() {}
}
