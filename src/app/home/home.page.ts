import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  availableDevices: Array<string> = ['Speaker 1', 'Speaker 2', 'Speaker 3', 'Speaker 4', 'Speaker 5'];
  addedDevices: Array<string> = [];
  isConnected: boolean[] = [];
  isModalOpen: boolean = false;

  constructor() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  addDevice(device: string) {
    // Vérifier si l'appareil n'est pas déjà ajouté
    if (!this.addedDevices.includes(device)) {
      this.addedDevices.push(device);
      this.isConnected.push(false); // Initialize connection status for new device
    } else {
      console.log('Cet appareil est déjà ajouté.');
    }
  }

  removeDevice(){
    this.addedDevices.pop();
  }

  connectDevice(index: number) {
    this.isConnected[index] = !this.isConnected[index]; // Toggle connection status
  }
}
