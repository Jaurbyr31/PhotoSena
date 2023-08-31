import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  receivedImageSource: any;
  receivedTitulo: string='';
  receivedDescripcion: string='';

  constructor(private router: Router, private route: ActivatedRoute) {}

  
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.receivedImageSource = params['imageSource'];
      this.receivedTitulo = params['titulo'];
      this.receivedDescripcion = params['Descripcion'];
    });
  }
  irFormulario(){ this.router.navigate(['./formulario']);  }
  

  irDetalle() {this.router.navigate(['/detalle-photo'], {
    queryParams: {
      receivedImageSource: this.receivedImageSource,
      receivedTitulo: this.receivedTitulo,
      receivedDescripcion: this.receivedDescripcion,
      },
    });
  }
}
