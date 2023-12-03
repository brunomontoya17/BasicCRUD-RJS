import { set } from "react-hook-form";
import { Producto, Rubro, listaRubros } from "./MODEL";
import { useState, useEffect, Fragment } from "react";

import PropTypes from 'prop-types';

function FormularioSelect({ listaProd, setListaProd }) {
    
    function borrarProducto(idPr)
    {
        const temp = listaProd.filter((prod) => prod.idProd !== idPr);
        setListaProd(temp);
    }

    return (
            <div>
                <form>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Nombre</td>
                                <td>Descripcion</td>
                                <td>Precio</td>
                                <td>Rubro</td>
                                <td>Modificar</td>
                                <td>Borrar</td>
                            </tr>
                        </thead>
                        <tbody>
                            {listaProd.map((prod) => {
                                return (
                                    <tr key={prod.idProd}>
                                        <td>{prod.idProd}</td>
                                        <td>{prod.nombre}</td>
                                        <td>{prod.descripcion}</td>
                                        <td>{prod.precio}</td>
                                        <td>{prod.rubro.nombreRubro}</td>
                                        <td></td>
                                        <td><input type='button' value='Borrar' onClick={ borrarProducto(prod.idProd) }/></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
    );
}

FormularioSelect.propTypes = {
    listaProd: PropTypes.array,
    setListaProd: PropTypes.func,
}

export default FormularioSelect