
export interface Carrito{

    id_cliente?:number,
    detalle?: [
        {
            id_producto?:number,
            deve_num_producto?: number
        }
    ]

}