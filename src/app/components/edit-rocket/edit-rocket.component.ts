import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RocketModel } from 'src/app/models/rocket.model';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-edit-rocket',
  templateUrl: './edit-rocket.component.html'
})
export class EditRocketComponent {
  id: string = "";
  rocket: RocketModel = new RocketModel();
  formulario!: FormGroup;

  constructor(private _service: RocketService, private _router: Router, private _route: ActivatedRoute, private fb: FormBuilder) {
    this.getRocketById();
    this.formulario = this.fb.group({
      numberEngines: ['', [Validators.min(1)]],
      countryOfManufacture: ['', [Validators.required]]
    });
  }

  get CountryNoValid() {
    return (
      this.formulario?.get('countryOfManufacture')?.invalid &&
      this.formulario.get('countryOfManufacture')?.touched
    );
  }

  get EngineNoValid() {
    return (
      this.formulario?.get('numberEngines')?.invalid &&
      this.formulario.get('numberEngines')?.touched
    );
  }

  getRocketById() {
    this.id = this._route.snapshot.paramMap.get('id')!.toString();
    this._service.getRocketById(this.id)
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

  Update() {
    if (this.formulario?.valid) {
      this.rocket.countryOfManufacture = this.formulario.get('countryOfManufacture')?.value;
      this.rocket.numberEngines = this.formulario.get('numberEngines')?.value;
      this._service.updateRocket(this.rocket)
        .subscribe({
          next: (data) => {
            alert('Rocket: ' + ' was updated');
            this._router.navigateByUrl('rocketList');
          },error:(error) => console.error(error.message)
        });
    }
  }

}
