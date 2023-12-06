import { Modal, Button } from "react-bootstrap";
import FormularioModificar from "./FormularioModificar";
import { useEffect } from "react";
import PropTypes from 'prop-types';



function ModalModificar({ modProd, setModProd, listaProd, setListaProd, show, setShow}) {
    
    /*
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);*/
    const handleClose = () => setShow(false);

    return (
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
    );
}

ModalModificar.propTypes = {
    listaProd: PropTypes.array,
    setListaProd: PropTypes.func,
    setModProd: PropTypes.func
}

export default ModalModificar;