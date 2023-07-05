import { Rover } from "../rover/Rover";

export interface ISender {

	sendToRover(command: string): void;
	sendToMissionControl(rover: Rover): void;

};