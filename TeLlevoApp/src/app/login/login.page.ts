import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = 'beta'; // Nombre de usuario predefinido
  password: string = 'beta'; // Inicializa la contraseña con la predefinida

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private animationCtrl: AnimationController// Agrega esta línea
 
  ) {
    // Obtén la nueva contraseña de los parámetros de la URL (si se proporciona)
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams && queryParams['newPassword']) {
        this.password = queryParams['newPassword'];
      }
    });
  }

  // Función para manejar el inicio de sesión
  login() {
    // Compara el nombre de usuario y contraseña ingresados con los valores predefinidos
    if (this.username === 'beta' && this.password === 'beta') {
      // Agrega la clase de animación al elemento del formulario
      const formElement = document.querySelector('.login-form');
      if (formElement) {
        formElement.classList.add('slide-in');
      }
  
      // Redirige al usuario a la página de inicio si las credenciales son correctas
      this.navCtrl.navigateForward('/home', { queryParams: { username: this.username } });
    } else {
      // Muestra un mensaje de error al usuario si las credenciales son incorrectas
      console.log('Credenciales incorrectas');
    }
  }
  
  

  // Función para manejar el restablecimiento de contraseña
  resetPassword() {
    // Redirige al usuario a la página de restablecimiento de contraseña
    this.navCtrl.navigateForward('/reset-password');
  }
}

