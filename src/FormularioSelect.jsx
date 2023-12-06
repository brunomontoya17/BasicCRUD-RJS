
import { Producto } from "./MODEL";
import { useState } from "react";
import FormularioModificar from "./FormularioModificar";
import { Modal, Button } from "react-bootstrap";
import ModalModificar from "./ModalModificar";

import PropTypes from 'prop-types';

function FormularioSelect({ listaProd, setListaProd }) {

    let idBorrar = 0;
    let comando = '';
    let idModificar = 0;
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [modProd, setModProd] = useState(new Producto())

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (comando == "borrar") {
                    const temp = listaProd.filter((prod) => idBorrar != prod.idProd);
                    setListaProd(temp);
                }
                if (comando == "modificar") {
                    const selectProd = listaProd.find((prod) => prod.idProd == idModificar);
                    setModProd(selectProd);
                    handleShow();
                }
            }}>
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
                                    <td><input type="submit" value="Modificar" onClick={() => {
                                        comando = "modificar";
                                        idModificar = prod.idProd;
                                    }} /></td>
                                    <td><input type='submit' value='Borrar' onClick={() => {
                                        comando = "borrar";
                                        idBorrar = prod.idProd;
                                    }} /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </form>
            <ModalModificar modProd={modProd} setModProd={setModProd} 
                            listaProd={listaProd} setListaProd={setListaProd}
                            show={show} setShow={setShow} />
        </div>
    );
}

FormularioSelect.propTypes = {
    listaProd: PropTypes.array,
    setListaProd: PropTypes.func,
}

export default FormularioSelect