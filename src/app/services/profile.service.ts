import { Profile } from '../common/profile';

export class ProfileService {
    private profiles: Profile[] = [
        new Profile('Default profile', ['New York', 'London', 'Berlin'])
    ];
    
    saveProfile(cities: string[]) {
        let profileName = 'Profile' + this.profiles.length;
        let profile = new Profile(profileName, cities);
        this.profiles.push(profile);
    }
    
    getProfiles() {
        return this.profiles;
    }
    
    deleteProfile(profile: Profile) {
        this.profiles.splice(this.profiles.indexOf(profile), 1);
    }
}
