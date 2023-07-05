import { ISender } from "../interfaces/ISender";
import { IReceiver } from "../interfaces/IReceiver";
import { MissionControl } from "../mission_control/MissionControl";

export class WebSocket implements ISender, IReceiver {

	constructor(private _missionControl: MissionControl) {

	}

	send(): void {
		this._missionControl.send(this);
	}

	receive(): void {
		this._missionControl.receive(this);
	}
};