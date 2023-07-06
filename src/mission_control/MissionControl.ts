import { IReceiver } from "../interfaces/IReceiver";
import { ISender } from "../interfaces/ISender";
import { Interpretor } from "../interpretor/Interpretor";
import { Rover } from "../rover/Rover";



export class MissionControl {
	
	constructor(private _interpretor: Interpretor, private sender: ISender, private receiver: IReceiver) {
	}

	send(command: string): void {
		this.sender.sendToRover(command);
	}

	receive(message: string): void {
		const statut = this.receiver.receiveFromRover();

		console.log("Ici on devrait l'envoyer à l'UI: J'ai reçu les informations Rover!!");
	}
	
	interpretCommand(command: string): void {
		const isVerified = this._interpretor.verifyCommand(command);
		if (!isVerified) {
			throw new Error('Command not recognized');
		}
		this.sender.sendToRover(command);
	}
}