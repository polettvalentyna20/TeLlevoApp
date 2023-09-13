import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-programar-viaje',
  templateUrl: 'programar-viaje.page.html',
  styleUrls: ['programar-viaje.page.scss'],
})
export class ProgramarViajePage {
  origen: string = '';
  destino: string = '';
  fecha: string = '';

  constructor(private navCtrl: NavController) {}

  programarViaje() {
    // Validar que se haya ingresado información antes de almacenarla
    if (this.origen.trim() === '' || this.destino.trim() === '' || this.fecha.trim() === '') {
      // Mostrar un mensaje de error si falta información
      alert('Por favor, complete todos los campos antes de programar el viaje.');
      return; // Salir de la función sin guardar datos incorrectos
    }

    // Crear un objeto para representar el viaje
    const nuevoViaje = {
      origen: this.origen,
      destino: this.destino,
      fecha: this.fecha,
    };

    // Obtener la lista de viajes almacenados localmente (si existe)
    const viajesAlmacenados = localStorage.getItem('viajes');

    // Si no hay viajes almacenados aún, crea un arreglo vacío
    const listaDeViajes = viajesAlmacenados ? JSON.parse(viajesAlmacenados) : [];

    // Agregar el nuevo viaje a la lista
    listaDeViajes.push(nuevoViaje);

    // Guardar la lista de viajes actualizada en el almacenamiento local
    localStorage.setItem('viajes', JSON.stringify(listaDeViajes));

    // Luego de guardar, puedes redirigir al usuario a donde sea necesario, por ejemplo, a la página de inicio
    this.navCtrl.navigateBack('/home');
  }
}

