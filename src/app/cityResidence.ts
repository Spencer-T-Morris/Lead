export class CityResidence {
    yearBuilt: number = 0;
    streetNumber: number = 0;
    streetName: string = '';
    streetAddress: string = '';
    zipCode: number = 0;
    geolocation: google.maps.LatLng = new google.maps.LatLng({ lat: 0, lng: 0 });

    constructor(fullCityParcel: any) {
        // Pulling data straight from city dataset
        this.streetAddress = fullCityParcel.street_address;
        this.streetNumber = fullCityParcel.Number;
        this.streetName = fullCityParcel.Street;
        this.zipCode = fullCityParcel.Zip;
        this.yearBuilt = parseInt(fullCityParcel.year_built);
        this.geolocation = new google.maps.LatLng({
            lat: fullCityParcel.Latitude,
            lng: fullCityParcel.Longitude
        });
    }
}