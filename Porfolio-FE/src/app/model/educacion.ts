export class Educacion {

    id?: number;
    establecimiento: string;
    descripcionE: string;
    fechaE: string;

    constructor(establecimiento: string, descripcionE: string, fechaE: string){
        this.establecimiento=establecimiento;
        this.descripcionE=descripcionE;
        this.fechaE=fechaE;
    }

}
