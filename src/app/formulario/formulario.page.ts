import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType} from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  imageSource: any;
  constructor() { }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false ,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });
    this.imageSource=image.dataUrl;
  }

  ngOnInit() {
  }

}
