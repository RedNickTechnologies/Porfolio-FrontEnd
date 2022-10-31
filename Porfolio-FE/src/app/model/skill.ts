export class Skill {
    id: number;
    nombre: string;
    progress: number;
    img: string;

    constructor(nombre:string, progress: number, img : string){
        this.nombre = nombre;
        this.progress = progress;
        this.img=img;
    }
}
