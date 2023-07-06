
import './style.css'
//@ts-ignore
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import { WebSocket } from './web_socket/WebSocket';
import { ConsoleCommand } from './ui/command/ConsoleCommand';
import { MissionControl } from './mission_control/MissionControl';
import { Interpretor } from './interpretor/Interpretor';
export const missionControlSocket = io('http://localhost:3000');

missionControlSocket.on("connect", () => {
  console.log("Bonjour je suis le mission control et je suis connecté: ",missionControlSocket.connected); // true
});

missionControlSocket.on('disconnect', () => {
  console.log("Le mission contole s'est déconnecté");
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`

console.log("Que voulez vous faire ? ")
const ReponseUtilisateur = "Z!";

const interpretor = new Interpretor();

const ws = new WebSocket();
ws.sendToRover("blablalba");

const missionControl = new MissionControl(interpretor,ws,ws);

const consoleCommand = new ConsoleCommand(missionControl);

consoleCommand.sendToMissionControl(ReponseUtilisateur);
