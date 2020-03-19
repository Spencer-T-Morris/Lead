export class CityResidence {
    yearBuilt: number = 0;
    streetNumber: number = 0;
    streetName: string = '';
    streetDirection: string = '';
    geolocation: google.maps.LatLng = new google.maps.LatLng({ lat: 0, lng: 0 });
    formattedAddress: string = '';
    private geocoder: google.maps.Geocoder = new google.maps.Geocoder();

    constructor(fullCityParcel: any) {
        // Pulling data straight from city dataset
        this.yearBuilt = parseInt(fullCityParcel.year_built);
        this.streetNumber = parseInt(fullCityParcel.parcel_street_number);
        this.streetName = fullCityParcel.parcel_street_name.toString();
        this.streetDirection = fullCityParcel.parcel_street_direction.toString();

        // Combining data for geocoding
        let tempAddress: string = `${this.streetNumber} ${this.streetName} ${this.streetDirection}`;
        // Reverse geocoding
        this.geocoder.geocode({ 'address': tempAddress }, (results, status) => {
            if (status == 'OK') {
                this.geolocation = results[0].geometry.location;
                this.formattedAddress = results[0].formatted_address;
            } else {
                console.log('CityResidence geocode was not successful for the following reason: ' + status);
            }
        });
    }
}