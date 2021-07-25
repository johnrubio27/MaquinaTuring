export class Transicion {
    reemplazo: string;
    movimiento: Movimientos;
    nuevoEstado: string;

    constructor(reemplazo: string, movimiento: Movimientos, nuevoEstado: string) 
    {
        this.reemplazo = reemplazo;
        this.movimiento = movimiento;
        this.nuevoEstado = nuevoEstado;
    }
}

export enum Movimientos {
    Izq = "IZQUIERDA",
    Der = "DERECHA"
}