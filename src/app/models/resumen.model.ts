export class Resumen{
    id_Operador: number;
    cantidad: number;
    valorTotal: number;
    operador: string;
    vendedor: string;

    constructor(){
        this.id_Operador = 0;
        this.cantidad = 0;
        this.valorTotal = 0;
        this.operador = '';
        this.vendedor = '';
    }
}