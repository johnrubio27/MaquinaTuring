import { Movimientos, Transicion } from './transicion.model';
export class Maquina {
    entrada: string[];
    _acciones: string[] = [];
    _entradaResultante: string[] = [];
    _estados: string[] = [];
    _transicion: Transicion[] = [];
    constructor(entrada: string[]) {
        this.entrada = entrada;
    }
    rrecorrer(estado: string){
        let aux: string = estado;
        for (let index = 0; index < this.entrada.length; index++) {
            if(index != 0){
                switch (aux) {
                    case 'Q0':
                        switch (this.entrada[index]) {
                            case 'a':
                                this._entradaResultante.push('a');
                                aux = 'Q0';
                                this._transicion.push(new Transicion('a',Movimientos.Der,aux))
                                break;
                            case 'b':
                                this._entradaResultante.push('a');
                                aux = 'Q0';
                                this._transicion.push(new Transicion('a',Movimientos.Der,aux))
                                break;
                            case '_':
                                this._entradaResultante.push('_');
                                aux = 'Q1';
                                this._transicion.push(new Transicion('_',Movimientos.Izq,aux))
                                break;
                        }
                        break;
                }
            }
        }

        this._entradaResultante.unshift('_');
        // console.log(this._entradaResultante);
        // console.log('Entrada longitud', this._entradaResultante.length - 2);
        // console.log('Empezo lo bueno');

        for (let index = this._entradaResultante.length - 2; index > -1; index--) {
            switch (aux) {
                case 'Q1':
                    switch (this._entradaResultante[index]) {
                        case 'a':
                            aux='Q1';
                            this._transicion.push(new Transicion('a',Movimientos.Izq,aux))
                            break;
                        case '_':
                            aux='Q2';
                            this._transicion.push(new Transicion('_',Movimientos.Der,aux))
                            break;
                    }
                    break;
            }
        }
        console.log('esto es vida', this._transicion);
    }
    
    get acciones (){
        return this._acciones;
    }
}