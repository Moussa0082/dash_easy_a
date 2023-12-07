import { ClientModel } from "./clientModel";
import { Voiture } from "./voiture";
export interface Achat {
    idAchat:   number;
    dateAchat: Date;
    prix:      number;
    client:    ClientModel;
    voiture:   Voiture;
}