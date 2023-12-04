import { set } from "react-hook-form";
import { Producto, Rubro, listaRubros } from "./MODEL";
import { useState, useEffect, Fragment } from "react";
import FormularioModificar from "./FormularioModificar";
import { Modal, Button } from "react-bootstrap";

import PropTypes from 'prop-types';

function FormularioSelect({ listaProd, setListaProd }) {

    let idBorrar = 0;
    let comando = '';

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [modProd, setModProd] = useState(new Producto())

    function Modificar() {
        return (
            <>

            </>
        );

    }


    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (comando == "borrar") {
                    console.log(idBorrar);
                    const temp = listaProd.filter((prod) => idBorrar != prod.idProd);
                    setListaProd(temp);
                }
            }

            }>
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
                                        setModProd(prod);
                                        setShow(true);
                                    }} /></td>
                                    <td><input type='submit' value='Borrar' onClick={() => {
                                        idBorrar = prod.idProd;
                                        comando = "borrar"
                                    }} /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioModificar producto={modProd} setProducto={setModProd} listaProd={listaProd}
                    setListaProd={setListaProd} closeShow={handleClose} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >Close Modal</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

FormularioSelect.propTypes = {
    listaProd: PropTypes.array,
    setListaProd: PropTypes.func,
}

export default FormularioSelect