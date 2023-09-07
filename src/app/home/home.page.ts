import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageArray: any[] = []; // Inicializa el arreglo como vacío.
  receivedImageSource: any;
  receivedTitulo: string = '';
  receivedDescripcion: string = '';
  receivedCalificacion: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.receivedImageSource = params['imageSource'];
      this.receivedTitulo = params['titulo'];
      this.receivedDescripcion = params['Descripcion'];
      this.receivedCalificacion = params['calificacion'];

      if (
        this.receivedImageSource &&
        this.receivedTitulo &&
        this.receivedDescripcion
      ) {
        // Agregar la nueva imagen al arreglo solo si los datos son válidos.
        this.imageArray.push({
          receivedImageSource: this.receivedImageSource,
          receivedTitulo: this.receivedTitulo,
          receivedDescripcion: this.receivedDescripcion,
          receivedCalificacion: this.receivedCalificacion,
        });
      }
    });
  }

  irFormulario() {
    this.router.navigate(['./formulario']);
  }

  irDetalle() {
    this.router.navigate(['/detalle'], {
      queryParams: {
        receivedImageSource: this.receivedImageSource,
        receivedTitulo: this.receivedTitulo,
        receivedDescripcion: this.receivedDescripcion,
        calificacion: this.receivedCalificacion,
      },
    });
  }
}
