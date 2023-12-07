import PropTypes from 'prop-types';

import { Producto, Rubro, retornarID } from "./MODEL";
import FormularioBaseAM from './FormularioBaseAM';
import { Container, Row, Col } from 'react-bootstrap';
import { Behavior } from "./CONFIG"

function FormularioAgregar({ products, setProducts }) {

    const clearForm = () => {
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = 0;
    }

    const readProduct = () => {
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const price = Number(document.getElementById("price").value);
        const type = JSON.parse(document.getElementById("type").value);
        const addRubro = new Rubro(type.idRubro,type.nombreRubro);
        return new Producto(retornarID(), name, description, price, addRubro)
    }

    const agregarProducto = (e) => {
        e.preventDefault();

        const product = readProduct()
        

        if (!product.nombre || !product.descripcion || !product.rubro) {
            console.log("missing fields")
            return
        }

        setProducts([...products, product])
        clearForm();
    }

    return (
        <div>
            <form onSubmit={agregarProducto}>
                <h2>Agregar Producto</h2>
                <FormularioBaseAM behavior={Behavior.agregar} producto={null} setProducto={null}/>
                <Container>
                    <Row>
                        <Col><label htmlFor='addProd'>Ingresar:</label></Col>
                        <Col><input id="addProd "type="submit" value={"Ingresar Producto"} /></Col>
                    </Row>
                </Container>
            </form>
        </div>
    );
}

FormularioAgregar.propTypes = {
    products: PropTypes.array,
    setProducts: PropTypes.func,
}

export default FormularioAgregar;