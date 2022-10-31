export class Contacto {

    id?: number;
    nombre: string;
    email: string;
    mensaje: string;

    constructor(nombre: string, email: string, mensaje: string){
        this.nombre=nombre;
        this.email=email;
        this.mensaje=mensaje;
    }
}
