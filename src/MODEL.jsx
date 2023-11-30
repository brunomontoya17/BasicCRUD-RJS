/*
class Producto {
    constructor (idProd = 0,nombre = '',descripcion = '',precio = 0.0,rubro = {}) {
        this.idProd = idProd;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.rubro = rubro;
    }
}*/

function Producto (idProd = 0,nombre = '',descripcion = '',precio = 0.0,rubro = {})
{
    this.idProd = idProd;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.rubro = rubro;
}
/*
class Rubro {
    constructor (idRubro,nombreRubro) {
        this.idRubro = idRubro;
        this.nombreRubro = nombreRubro;
    }
}
*/

function Rubro (idRubro=0,nombreRubro='')
{
    this.idRubro = idRubro;
    this.nombreRubro = nombreRubro;
}


const listaRubros = new Array();

const azul = new Rubro(1,'Azul');
listaRubros.push(azul);
const verde = new Rubro(2,'Verde');
listaRubros.push(verde);
const rojo = new Rubro(3,'Rojo');
listaRubros.push(rojo);

export { Producto, Rubro, listaRubros }