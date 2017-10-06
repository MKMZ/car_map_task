export class MapLocation {
    public latitude: number;
    public longitude: number;

    constructor(raw: any) {
        this.latitude = raw.latitude;
        this.longitude = raw.longitude;
    }
}
