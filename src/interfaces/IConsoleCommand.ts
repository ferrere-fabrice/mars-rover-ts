export interface IConsoleCommand {
	consoleCommand(): void;

	printConsoleMessage(message: string): void;
};