export interface ISender {
  sendToRover(command: string): void;
  sendToMissionControl(statut: string): void;
}
