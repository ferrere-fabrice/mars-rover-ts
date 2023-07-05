import { Rover } from "../rover/Rover";

export class Interpretor {

	COMMAND_ACCEPT = ['Z', 'Q', 'S', 'D', 'A', 'R', 'G']
	verifyCommand(command: string): boolean {
		if (this.COMMAND_ACCEPT.includes(command)) {
			return true;
		}
		return false;
	}

	actionRover(rover: Rover, command: string): Rover {
		
		if(command === 'A'|| command === 'Z') return rover.Avancer();
        if(command === 'R' || command ===  'S') return rover.Reculer();
        if(command === 'D' ) return rover.TourneADroite();
        if(command === 'G' || command ===  'Q') return rover.TourneAGauche();
		
		throw new Error("Not a valid command");
	}

	

}