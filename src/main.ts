import { MissionControl } from './mission_control/MissionControl'
import { ConsoleCommand } from './ui/command/ConsoleCommand'
import { Interpretor } from './interpretor/Interpretor';

const interpretor = new Interpretor();
const consoleCommand = new ConsoleCommand();
const missionControl = new MissionControl(consoleCommand, interpretor);



const fakeMessage = 'fake message';
consoleCommand.sendToMissionControl(missionControl, fakeMessage);

