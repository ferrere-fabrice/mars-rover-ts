import { IReceiver } from "../interfaces/IReceiver";
import { ISender } from "../interfaces/ISender";
import { Interpretor } from "../interpretor/Interpretor";

export class Rover implements IReceiver, ISender {
	
	private _interpretor!: Interpretor;
	
	send(): void {
		console.log("Sending data...");
	}

	receive(): void {
		console.log("Receiving data...");
	}
}