import { Rover } from "../rover/Rover";

export class Interpretor {

	COMMAND_ACCEPT = ['Z', 'Q', 'S', 'D', 'A', 'R', 'G']
	verifyCommand(command: string): boolean {
		if (this.COMMAND_ACCEPT.includes(command)) {
			return true;
		}
		return false;
	}

	actionRover(rover: Rover): void {
	}
}