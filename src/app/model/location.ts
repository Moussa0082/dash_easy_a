import { ClientModel } from "./clientModel";
import { Voiture } from "./voiture";

export interface Location {
    idLocation:   number;
    dateLocation: Date;
    duree:        string;
    prix:         number;
    voiture:      Voiture;
    client:       ClientModel;
}