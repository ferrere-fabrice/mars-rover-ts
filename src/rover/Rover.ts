import { Position } from "../geometrie/position";
import { IReceiver } from "../interfaces/IReceiver";
import { ISender } from "../interfaces/ISender";
import { Interpretor } from "../interpretor/Interpretor";
import { Orientation } from "../topologie/orientations";

export class Rover {
  public readonly Orientation: Orientation;
  public readonly Position: Position;

  constructor(
    private _interpretor: Interpretor,
    private sender: ISender,
    private receiver: IReceiver,
    orientation: Orientation,
    position: Position
  ) {
    this.Orientation = orientation;
    this.Position = position;
  }

  send(rover: Rover): void {
    this.sender.sendToMissionControl(rover);
  }

  receive(command: string): void {
    this.receiver.receiveFromMissionControl();
    this.interpretCommand(command);
  }

  interpretCommand(command: string): void {
	const roverNewState =  this._interpretor.actionRover(this, command);
	
    /*const isVerified = this._interpretor.verifyCommand(command);
		if (!isVerified) {
			throw new Error('Command not recognized');
		}
		this.send(command);*/
		this.send(roverNewState)
  }

  public TourneADroite(): Rover {
    return new Rover(
      this._interpretor,
      this.sender,
      this.receiver,
      this.Orientation.RotationHoraire(),
      this.Position
    );
  }

  public TourneAGauche(): Rover {
    return new Rover(
      this._interpretor,
      this.sender,
      this.receiver,
      this.Orientation.RotationAntihoraire(),
      this.Position
    );
  }

  public Avancer(): Rover {
    return new Rover(
      this._interpretor,
      this.sender,
      this.receiver,
      this.Orientation,
      this.Orientation.FaireAvancer(this.Position)
    );
  }

  public Reculer(): Rover {
    return new Rover(
      this._interpretor,
      this.sender,
      this.receiver,
      this.Orientation,
      this.Orientation.FaireReculer(this.Position)
    );
  }
}
