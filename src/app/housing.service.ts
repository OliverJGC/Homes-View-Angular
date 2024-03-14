import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  housingLocationList: HousingLocation[] = [];

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return this.housingLocationList = await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }


  submitApplication(firstName: string, lastName: string, email: string) {
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
      alert("Error. Fill out all inputs");
    } else {
      alert("Form Submitted Successfully!");
      console.log(firstName, lastName, email);
    }
  }

  constructor() { }
}

