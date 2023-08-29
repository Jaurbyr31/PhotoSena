import { Component } from '@angular/core';
import { Camera, CameraResultType} from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
imageSource: any;

  constructor() {}

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false ,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });
    this.imageSource=image.dataUrl;
  }
}
