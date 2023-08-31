import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
imageSource: any;

  constructor(private route: Router) {}

  
  Navigate(){
    this.route.navigate(['/detalle']);
    
  }
  agregar = async () => {
    
  }
}
