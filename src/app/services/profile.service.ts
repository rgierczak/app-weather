import { ProfileModel } from '../models/profile.model';

export class ProfileService {
    private profiles: ProfileModel[] = [
        new ProfileModel('Default profile', ['New York', 'London', 'Berlin'])
    ];
    
    saveProfile(cities: string[]) {
        let profileName = 'Profile ' + this.profiles.length;
        let profile = new ProfileModel(profileName, cities);
        this.profiles.push(profile);
    }
    
    getProfiles() {
        return this.profiles;
    }
    
    deleteProfile(profile: ProfileModel) {
        this.profiles.splice(this.profiles.indexOf(profile), 1);
    }
}
