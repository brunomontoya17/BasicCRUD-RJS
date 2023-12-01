import { useState, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Producto, Rubro, listaRubros, retornarValor } from "./MODEL";

function FormularioAgregar({ listaProd, setListaProd }) {

    const prod = new Producto();
    //console.log(prod);
    const [addProd, setAddProd] = useState(prod);
    const [selRubro, setSelRubro] = useState(listaRubros[0])
    const [lRubro, setLRubro] = useState([...listaRubros]);
    const [countAdd, setCountAdd] = useState(0);
    let contador= 0;
    const [cambiador, setCambiador] = useState(false);
    
    useEffect(() => {
        setAddProd((desagg) =>
        ({
            ...desagg,
            idProd: retornarValor()
        }))
        setAddProd((desagg) =>
        ({
            ...desagg,
            rubro: selRubro
        }));
    }, [listaProd])

    function cambioNombre(e) {
        setAddProd((valores) => ({
            ...valores,
            nombre: e.target.value,
        }))
    }

    function cambioDescripcion(e) {
        setAddProd((desagg) => ({
            ...desagg,
            descripcion: e.target.value,
        }))
    }

    function cambioPrecio(e) {
        setAddProd((desagg) => ({
            ...desagg,
            precio: parseFloat(e.target.value),
        }))
    }

    function cambioRubro(e) {
        const found = listaRubros.find((rubr) => rubr.idRubro == e.target.value);
        
        setAddProd((desagg) =>
        ({
            ...desagg,
            rubro: found
        }));
        setSelRubro(found);
    }

    function agregarProducto(e) {
        e.preventDefault();
        
        setCambiador(!cambiador.valueOf());
        //listaProductos.push(addProd);
        setListaProd([...listaProd, addProd])
        //listaProductos.forEach((produ) => {console.log(`${produ.nombre} : ${produ.precio}`)});
        document.getElementById("nombreProd").value = "";
        document.getElementById("descProd").value = "";
        document.getElementById("precProd").value = 0;
    }

    return (
        <Fragment>
            <div>
                <form onSubmit={agregarProducto}>
                    <h2>Agregar Producto</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Nombre</label></td>
                                <td><input id="nombreProd" type="text" value={addProd.nombre} onChange={cambioNombre} /></td>
                            </tr>
                            <tr>
                                <td><label>Descripcion</label></td>
                                <td><input id="descProd" type="textarea" value={addProd.descripcion} cols="128" rows="8" onChange={cambioDescripcion} /></td>
                            </tr>
                            <tr>
                                <td><label>Precio</label></td>
                                <td><input id="precProd" type="number" value={addProd.precio} step={0.01} onChange={cambioPrecio} /></td>
                            </tr>
                            <tr>
                                <td><label>Rubro</label></td>
                                <td><select id="rubProd" value={selRubro.idRubro} onChange={cambioRubro}>
                                    {lRubro.map((rub) => {
                                        return (
                                            <option key={rub.idRubro} value={rub.idRubro}>{rub.nombreRubro}</option>
                                        )
                                    })}
                                </select></td>
                            </tr>
                            <tr>
                                <td><label>Ingresar:</label></td>
                                <td><label><input type="submit" value={"Ingresar Producto"} /></label></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </Fragment>
    );
}

export default FormularioAgregar;