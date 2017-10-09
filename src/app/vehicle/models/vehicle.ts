import { MapLocation } from 'app/shared/models/map-location';
import { VehicleStatus } from 'app/vehicle/types/vehicle-status';
import { VehicleType } from 'app/vehicle/types/vehicle-type';

export class Vehicle {
    public id: string;
    public name: string;
    public description: string | null;
    public status: VehicleStatus;
    public type: VehicleType;
    public platesNumber: string;
    public sideNumber: string;
    public location: MapLocation;
    public color: string;
    public rangeKm: number;
    public batteryLevelPct: number;

    constructor(raw: any) {
        this.id = raw.id;
        this.name = raw.name;
        this.description = raw.description;
        this.status = raw.status;
        this.type = raw.type;
        this.platesNumber = raw.platesNumber;
        this.sideNumber = raw.sideNumber;
        this.location = new MapLocation(raw.location);
        this.color = raw.color;
        this.rangeKm = raw.rangeKm;
        this.batteryLevelPct = raw.batteryLevelPct;
    }
}
