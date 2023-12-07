import { Container, Row, Col } from 'react-bootstrap';
import FormularioBaseAM from './FormularioBaseAM';
import PropTypes from 'prop-types';
import { Behavior } from "./CONFIG"

function FormularioModificar({ producto, listaProd, setListaProd, setProducto, closeShow }) {

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setListaProd(listaProd.map(item => item.idProd == producto.idProd ? producto : item));
                closeShow();
            }}>
                <h2>Modificar Producto</h2>
                <FormularioBaseAM behavior={Behavior.modificar} producto={producto} setProducto={setProducto}/>
                <Container>
                    <Row>
                        <Col><label htmlFor='modProd'>Modificar:</label></Col>
                        <Col><input id="modProd" type="submit" value={"Modificar Producto"} /></Col>
                    </Row>
                </Container>
            </form>
        </div>
    );
}

FormularioModificar.propTypes = {
    closeShow: PropTypes.func,
    listaProd: PropTypes.array,
    setListaProd: PropTypes.func
}

export default FormularioModificar;