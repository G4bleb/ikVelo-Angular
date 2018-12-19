export class DeplacementJour {
    private _id: number;
    private _nb_km: number;
    private _montant: number;
    private _jour: number;
    private _date: string;
    private _created: string;
    private _updated: string;
    private _type_deplacement_id: number;
    private _deplacement_id: number;

    get id(): number {
        return this._id;
    }
    get nb_km(): number {
        return this._nb_km;
    }
    get montant(): number {
        return this._montant;
    }
    get jour(): number {
        return this._jour;
    }
    get date(): string {
        return this._date;
    }
    get created(): string {
        return this._created;
    }
    get updated(): string {
        return this._updated;
    }
    get type_deplacement_id(): number {
        return this._type_deplacement_id;
    }
    get deplacement_id(): number {
        return this._deplacement_id;
    }


    set id(set: number) {
        this._id = set;
    }
    set nb_km(set: number) {
        this._nb_km = set;
    }
    set montant(set: number) {
        this._montant = set;
    }
    set jour(set: number) {
        this._jour = set;
    }
    set date(set: string) {
        this._date = set;
    }
    set created(set: string) {
        this._created = set;
    }
    set updated(set: string) {
        this._updated = set;
    }
    set type_deplacement_id(set: number) {
        this._type_deplacement_id = set;
    }
    set deplacement_id(set: number) {
        this._deplacement_id = set;
    }

}