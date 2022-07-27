export default class countdown{
    constructor(futuredate){
        this.futuredate = futuredate;
    }

    get _actualDate(){
        return new Date();
    }

    get _futureDate(){
        return new Date(this.futuredate);
    }

    get _timeDif() {
        return this._futureDate.getTime() - this._actualDate.getTime();
    }

    get _Days(){
        return Math.floor(this._timeDif / (24 * 60 * 60 * 1000));
    }

    get _hours(){
        return Math.floor(this._timeDif / (60 * 60 * 1000));
    }

    get _minutes(){
        return Math.floor(this._timeDif / (60 * 1000));
    }

    get _seconds() {
        return Math.floor(this._timeDif / (1000));
    }

    get total(){
        const days = this._Days;
        const hours = this._hours % 24;
        const minutes = this._minutes % 60;
        const seconds = this._seconds % 60;
        return [days, hours, minutes, seconds];
    }

}