import { Voiture} from './voiture'
export interface Maintenance {
    idMaintenance: number;
    date:          Date;
    prix:          number;
    description:   string;
    voiture:       Voiture;
}