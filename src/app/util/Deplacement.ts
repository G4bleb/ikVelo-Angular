export class Deplacement {
    private _id: number;
    private _annee: number;
    private _mois: number;
    private _date_validation: string; 
    private _created: string;
    private _updated: string;
    private _user_id: number;
    private _user_id1: number;
    private _validation: boolean;
    
    get id(): number {
        return this._id;
    }
    get annee(): number {
        return this._annee;
    }
    get mois(): number {
        return this._mois;
    }
    get date_validation(): string {
        return this._date_validation;
    }
    get created(): string {
        return this._created;
    }
    get updated(): string {
        return this._updated;
    }
    get user_id(): number {
        return this._user_id;
    }
    get user_id1(): number {
        return this._user_id1;
    }
    get validation(): boolean {
        return this._validation;
    }
    
    set id(set: number) {
        this._id = set;
    }
    set annee(set: number) {
        this._annee = set;
    }
    set mois(set: number) {
        this._mois = set;
    }
    set date_validation(set: string) {
        this._date_validation = set;
    }
    set created(set: string) {
        this._created = set;
    }
    set updated(set: string) {
        this._updated = set;
    }
    set user_id(set: number) {
        this._user_id = set;
    }
    set user_id1(set: number) {
        this._user_id1 = set;
    }
    set validation(set: boolean) {
        this._validation = set;
    }
}