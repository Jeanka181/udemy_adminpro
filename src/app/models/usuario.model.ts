export class Usuarios {
  constructor(
    public nombres: string,
    public apellidos: string,
    public correo: string,
    public contrasena: string,
    // ? significa que son parametros opcionales, desde aky en adelante por fuerza hay que hace asi
    public avatar?: string,
    public google?: boolean,
// tslint:disable-next-line: variable-name
    public _id?: string
  ) { }
}
