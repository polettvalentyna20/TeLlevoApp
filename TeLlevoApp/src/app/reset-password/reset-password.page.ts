import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.page.html',
  styleUrls: ['reset-password.page.scss'],
})
export class ResetPasswordPage {
  currentPassword: string = 'contraseña_demo'; // Contraseña actual
  newPassword: string = ''; // Nueva contraseña

  constructor(private navCtrl: NavController) {}

  // Función para manejar el restablecimiento de contraseña
  resetPassword() {
    // Verifica que se haya proporcionado una nueva contraseña
    if (this.newPassword !== '') {
      // Actualiza la contraseña actual con la nueva contraseña
      this.currentPassword = this.newPassword;

      // Muestra un mensaje de éxito en la interfaz de usuario
      alert('Contraseña cambiada con éxito');

      // Redirige al usuario a la página de inicio de sesión
      this.navCtrl.navigateBack('/login');
    } else {
      // Muestra un mensaje de error en la interfaz de usuario
      alert('Debes proporcionar una nueva contraseña');
    }
  }
}
