import { IMissionControlCommand } from "../../interfaces/IMissionControlCommand";
import { MissionControl } from "../../mission_control/MissionControl";

export class HtmlCommand implements IMissionControlCommand {

	constructor(private _missioncontrol: MissionControl) {

	}
	printMessage(message: string): void {
		console.log('HTML message: ' + message);
	}

	printError(error: string): void {
		console.error('HTML error: ' + error);
	}

	sendToMissionControl(command: string): void {
		this._missioncontrol.interpretCommand(command);
	}
}