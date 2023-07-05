import { Rover } from "../rover/Rover";

export interface IReceiver {

	receiveFromRover(): Rover;
	receiveFromMissionControl(): void;

};