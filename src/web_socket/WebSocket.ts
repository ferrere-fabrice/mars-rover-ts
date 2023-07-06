import { ISender } from '../interfaces/ISender';
import { IReceiver } from '../interfaces/IReceiver';
import { missionControlSocket } from '../main.missioncontrol';
import { io } from '../main.rover';

export class WebSocket implements ISender, IReceiver {
  receiveFromRover(): string {
    missionControlSocket.on('message', (data: any) => {
      console.log('Un message reçu du rover:', data);
    });
    return '';
  }

  receiveFromMissionControl(): void {
  }

  sendToRover(command: string): void {
    missionControlSocket.emit('message', command);
  }

  sendToMissionControl(statut: string): void {

  }


}
