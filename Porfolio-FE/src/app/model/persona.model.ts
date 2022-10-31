export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    hobbie: string;
    img: string;

    constructor(nombre: string, apellido: string, titulo: string, hobbie: string, img: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.titulo=titulo;
        this.hobbie=hobbie;
        this.img=img;
    }
}