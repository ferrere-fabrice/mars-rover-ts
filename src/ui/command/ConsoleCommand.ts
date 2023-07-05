import { IMissionControlCommand } from "../../interfaces/IMissionControlCommand";
import { MissionControl } from "../../mission_control/MissionControl";

export class ConsoleCommand implements IMissionControlCommand {

	constructor(private _missionocntrol: MissionControl) {

	}

	printMessage(message: string): void {
		console.log(message);
	}

	printError(error: string): void {
		console.error(error);
	}

	sendToMissionControl(command: string): void {
		this._missionocntrol.interpretCommand(command);
	}
}