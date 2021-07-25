export class Transicion {
    letraActual: string;
    reemplazo: string;
    movimiento: Movimientos;
    nuevoEstado: string;

    constructor(letraActual: string, reemplazo: string, movimiento: Movimientos, nuevoEstado: string) 
    {
        this.letraActual = letraActual;
        this.reemplazo = reemplazo;
        this.movimiento = movimiento;
        this.nuevoEstado = nuevoEstado;
    }
}

export enum Movimientos {
    Izq = "IZQUIERDA",
    Der = "DERECHA"
}