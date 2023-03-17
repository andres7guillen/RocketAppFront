import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RocketModel } from 'src/app/models/rocket.model';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-list-rocket',
  templateUrl: './list-rocket.component.html'
})
export class ListRocketComponent {
  rockets: RocketModel[];

  constructor(private service: RocketService, router: Router){
    this.rockets = [];
  }

  ngOnInit(): void {
    this.getRockets();
  }

  getRockets() {
    this.service.getRockets()
      .subscribe({
        next: (data) => {
          this.rockets = data;
        }
      });
  }


  deleteRocket(rocket: RocketModel) {
    this.service.deleteRocket(rocket.id).subscribe({
      next: (data) => {
        this.getRockets();
        if (data != undefined) {
          const indexList = this.rockets.indexOf(rocket);
          if (indexList !== -1) {
            this.rockets.splice(indexList, 1);
          }
        }
      },
      error: (error) => {
        alert('An error ocurred, ' + error.message)
      }
    })
  }


}
