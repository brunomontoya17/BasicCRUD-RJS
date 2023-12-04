import { Producto, Rubro, listaRubros } from "./MODEL";
import { useState, useEffect, Fragment } from "react";
import PropTypes from 'prop-types';

function FormularioModificar({ producto, listaProd, setListaProd, setProducto, closeShow }) {
    return (
        <>
            <div>
                <form onSubmit={ (e) => { e.preventDefault();
                setListaProd(listaProd.map(item => item.idProd == producto.idProd ? producto : item));
                closeShow() } }>
                    <h2>Modificar Producto</h2>
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <td><label>Nombre</label></td>
                                <td><input id="name" type="text" value={producto.nombre} onChange={ (e) => { 
                                    setProducto(({...producto,
                                    nombre: e.target.value}));
                                } }/></td>
                            </tr>
                                <tr>
                                <td><label>Descripcion</label></td>
                                <td><textarea value={producto.descripcion} className='form-control' id="description" cols="128" rows="8" onChange={ (e) => { 
                                    setProducto(({...producto,
                                    descripcion: e.target.value}));
                                } } /></td>
                            </tr>
                            <tr>
                                <td><label>Precio</label></td>
                                <td><input id="price" type="number" value={producto.precio} step={0.01} min={0} onChange={ (e) => { 
                                    setProducto(({...producto,
                                    precio: e.target.value}));
                                } } /></td>
                            </tr>
                            <tr>
                                <td><label>Rubro</label></td>
                                <td><select className='form-select' id="type" value={JSON.stringify(producto.rubro)}
                                onChange={ (e) => { 
                                    setProducto(({...producto,
                                    rubro: JSON.parse(e.target.value)}));
                                } }>
                                    {listaRubros.map((rub) => {
                                        return (
                                            <option key={rub.idRubro} value={JSON.stringify(rub)}>{rub.nombreRubro}</option>
                                        )
                                    })}
                                </select></td>
                            </tr>
                            <tr>
                                <td><label>Modificar:</label></td>
                                <td><label><input type="submit" value={"Modificar Producto"} /></label></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}

FormularioModificar.propTypes = {
    closeShow: PropTypes.func,
    listaProd: PropTypes.array,
    setListaProd: PropTypes.func
}

export default FormularioModificar;