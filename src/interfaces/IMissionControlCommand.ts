export interface IMissionControlCommand {

	printMessage(message: string): void;

	printError(error: string): void;

	sendToMissionControl(command: string): void;
	
};