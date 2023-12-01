import { Producto, Rubro, listaRubros } from "./MODEL";
import { useState, useEffect, Fragment } from "react";

function FormularioSelect({ listaProd, setListaProd }) {
    return (
        <Fragment>
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
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </Fragment>
    );
}

export default FormularioSelect