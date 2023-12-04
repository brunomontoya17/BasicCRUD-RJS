import { set } from "react-hook-form";
import { Producto, Rubro, listaRubros } from "./MODEL";
import { useState, useEffect, Fragment } from "react";

import PropTypes from 'prop-types';

function FormularioSelect({ listaProd, setListaProd }) {
    
    let idBorrar = 0;

    function borrarProducto(idPr)
    {
        
        
    }


    return (
            <div>
                <form onSubmit={ (e) => { e.preventDefault();
                console.log(idBorrar);
                
                const temp = listaProd.filter( (prod) => idBorrar != prod.idProd );
                setListaProd(temp)} }>
                    <h2>Lista de Productos</h2>
                    <table className='table table-bordered'>
                        <thead className="table-dark">
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
                                    <tr id={prod.idProd} key={prod.idProd}>
                                        <td>{prod.idProd}</td>
                                        <td>{prod.nombre}</td>
                                        <td>{prod.descripcion}</td>
                                        <td>{prod.precio}</td>
                                        <td>{prod.rubro.nombreRubro}</td>
                                        <td></td>
                                        <td><input type='submit' value='Borrar' onClick={ () => { idBorrar = prod.idProd } } /></td>
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