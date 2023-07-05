import { IConsoleCommand } from "../interfaces/IConsoleCommand";
import { IHtmlCommand } from "../interfaces/IHtmlCommand";
import { IMissionControlCommand } from "../interfaces/IMissionControlCommand";
import { IReceiver } from "../interfaces/IReceiver";
import { ISender } from "../interfaces/ISender";
import { Interpretor } from "../interpretor/Interpretor";


export class MissionControl {
	
	constructor(private _interpretor: Interpretor) {
	}

	send(sender: ISender): void {
		
	}

	receive(receiver: IReceiver): void {
		receiver.receive();
	}
	
	interpretCommand(command: string): void {
		const isVerified = this._interpretor.verifyCommand(command);
		if (!isVerified) {
			throw new Error('Command not recognized');
		}
	}
}