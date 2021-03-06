import { Component, Input } from '@angular/core';
import { WeatherItemModel } from '../../models/weather-item.model';

@Component({
    selector: 'weather-item',
    templateUrl: './weather-item.component.html',
    styleUrls: ['./weather-item.component.css']
})

export class WeatherItemComponent {
    @Input('item') weatherItem: WeatherItemModel;
}
