import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RocketModel } from 'src/app/models/rocket.model';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-detail-rocket',
  templateUrl: './detail-rocket.component.html'
})
export class DetailRocketComponent {
  id: string = "";
  rocket: RocketModel = new RocketModel();

  formulario!: FormGroup;
  disabled: boolean = true;

  constructor(private _route: ActivatedRoute, private service: RocketService, private fb: FormBuilder) {
    this.getRocketById();
    this.formulario = this?.fb?.group({
      numberEngines: [{ value: '', disabled: true }, ''],
      countryOfManufacture: [{ value: '', disabled: true }, '']
    });
  }

  getRocketById(){
    this.id = this._route.snapshot.paramMap.get('id')!.toString();
    this.service.getRocketById(this.id)
      .subscribe({
        next: (data) => {
          this.rocket = data;
          this.formulario?.setValue({
            numberEngines: this.rocket.numberEngines,
            countryOfManufacture: this.rocket.countryOfManufacture
          });
        },
        error: (error) => console.error(error)
      })
  }

}
