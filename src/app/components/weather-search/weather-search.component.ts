import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls: ['./weather-search.component.css']
})

export class WeatherSearchComponent {
    city: String = null;

    onSubmit(form: FormGroup) {
        console.log('location: ', form.value.city);
    }
}
