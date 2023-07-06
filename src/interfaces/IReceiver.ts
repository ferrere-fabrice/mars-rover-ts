export interface IReceiver {
  receiveFromRover(): string;
  receiveFromMissionControl(): void;
}
