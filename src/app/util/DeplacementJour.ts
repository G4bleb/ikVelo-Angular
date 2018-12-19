export class DeplacementJour {
    private _id: number;
    private _nb_km: number;
    private _montant: number;
    private _jour: number;
    private _date: any;
    private _created: any;
    private _updated: any;
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
    get date(): any {
        return this._date;
    }
    get created(): any {
        return this._created;
    }
    get updated(): any {
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
    set date(set: any) {
        this._date = set;
    }
    set created(set: any) {
        this._created = set;
    }
    set updated(set: any) {
        this._updated = set;
    }
    set type_deplacement_id(set: number) {
        this._type_deplacement_id = set;
    }
    set deplacement_id(set: number) {
        this._deplacement_id = set;
    }

}