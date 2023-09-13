import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = ''; // Inicializa la variable username
  viajes: string[] = []; // Inicializa un arreglo para almacenar los viajes

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      if (queryParams && queryParams['username']) {
        this.username = queryParams['username'];
      }
    });
  }

  // Función para agregar un viaje
  programarViaje() {
    // Agrega un viaje al arreglo
    this.viajes.push('Nuevo Viaje'); // Puedes personalizar esto según tus necesidades
  }
}
