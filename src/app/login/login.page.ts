import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController, MenuController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private menuCtrl: MenuController
  ) {}

  async presentLoginAlert() {
    const alert = await this.alertController.create({
      header: 'Iniciar sesión',
      backdropDismiss: false, // No se cerrará al hacer clic fuera de la ventana
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Usuario',
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Contraseña',
        },
      ],
      buttons: [
        
        {
          text: 'Registrarse',
          role: 'text',
          handler:()=>{this.router.navigate(['/registro'])}
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.menuCtrl.close();
          },
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            if (data.username === 'jaurbyr' && data.password === '1234') {
              this.menuCtrl.close();
              this.router.navigate(['/home']);
            } else {
              this.presentToast('Los datos ingresados son incorrectos. Por favor, intente nuevamente.');
              this.presentLoginAlert();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  ionViewDidEnter() {
    this.menuCtrl.close();
    this.presentLoginAlert();
  }
}



