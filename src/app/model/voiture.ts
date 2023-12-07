import { AdminParking } from "./adminParking";

export interface Voiture {
    idVoiture:     number;
    marque:        string;
    modele:        string;
    anneeSortie:   string;
    photo2:        string;
    photo3:        string;
    photo4:        string;
    prix:          number;
    quantite:      number;
    type:          string;
    puissance:     string;
    adminParking:  AdminParking;
}