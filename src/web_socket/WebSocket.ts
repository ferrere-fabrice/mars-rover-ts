import { ISender } from "../interfaces/ISender";
import { IReceiver } from "../interfaces/IReceiver";
import { MissionControl } from "../mission_control/MissionControl";
import { Rover } from "../rover/Rover";

export class WebSocket implements ISender, IReceiver {
	receiveFromRover(): Rover {
		throw new Error("Method not implemented.");
	}
	
	sendToRover(command: string): void {
		throw new Error("Method not implemented.");
	}
	sendToMissionControl(rover: Rover): void {
		throw new Error("Method not implemented.");
	}

	receiveFromMissionControl(): void {
		throw new Error("Method not implemented.");
	}

	

	
};