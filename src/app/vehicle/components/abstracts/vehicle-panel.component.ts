import { Vehicle } from 'app/vehicle/models/vehicle';
import { Subscription } from 'rxjs/Subscription';
import { Output, EventEmitter, OnDestroy } from '@angular/core';



export abstract class VehiclePanelComponent implements OnDestroy {

    @Output() selectVehicle: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

    protected subSelected: Subscription;
    public selectedValue: Vehicle;

    compareVehicles(first: Vehicle, second: Vehicle): boolean {
        return first && second && first.id === second.id;
    }

    onSelectVehicle(selected: Vehicle) {
        this.selectVehicle.emit(selected);
    }

    ngOnDestroy(): void {
        if (this.subSelected && !this.subSelected.closed) {
            this.subSelected.unsubscribe();
        }
    }
}
