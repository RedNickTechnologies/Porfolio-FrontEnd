export class Proyecto {

    id?: number;
    nombre: string;
    url: string;
    desempenio: string;

    constructor(nombre: string, url: string, desempenio: string){
        this.nombre=nombre;
        this.url=url;
        this.desempenio=desempenio;       
    }

}
