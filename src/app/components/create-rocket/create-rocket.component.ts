import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RocketModel } from 'src/app/models/rocket.model';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-create-rocket',
  templateUrl: './create-rocket.component.html'
})
export class CreateRocketComponent {
  rocket: RocketModel = new RocketModel();
  formulario!: FormGroup;

  constructor(private _service: RocketService, private router: Router, private fb: FormBuilder) {
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

  Create() {
    if (this.formulario.valid) {
      this.rocket.countryOfManufacture = this.formulario.get('countryOfManufacture')?.value;
      this.rocket.numberEngines = this.formulario.get('numberEngines')?.value;
      this._service.createRocket(this.rocket)
        .subscribe({
          next: (data) => {
            alert('Rocket: ' + ' was created');
            this.router.navigateByUrl('rocketList');
          }
        });
    }
  }

}
