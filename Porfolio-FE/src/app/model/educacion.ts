export class Educacion {

    id?: number;
    establecimiento: string;
    logro: string;
    fecha: string;

    constructor(establecimiento: string, logro: string, fecha: string){
        this.establecimiento=establecimiento;
        this.logro=logro;
        this.fecha=fecha;
    }

}
