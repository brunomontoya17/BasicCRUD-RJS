import PropTypes from 'prop-types';
import { listaRubros } from "./MODEL";
import { Container, Row, Col } from 'react-bootstrap'

function FormularioBaseAM({ obj, productoMod }) {
    if (Object.keys(productoMod !== null) )
    {

    }

    return (
        <Container>
            <Row>
                <Col><label htmlFor="name">Nombre:</label></Col>
                <Col><input id="name" type="text"
                    value={() => {
                        if (productoMod !== null) {
                            return productoMod.nombre;
                        }
                    }}
                    onChange={(e) => {

                        obj.onChangeName(e);

                    }} /></Col>
            </Row>
            <Row>
                <Col><label htmlFor="description">Descripcion</label></Col>
                <Col><textarea id="description" className='form-control' cols="128" rows="3" /></Col>
            </Row>
            <Row>
                <Col><label >Precio</label></Col>
                <Col><input id="price" type="number" step={0.01} min={0} defaultValue={0} /></Col>
            </Row>
            <Row>
                <Col><label>Rubro</label></Col>
                <Col><select className='form-select' id="type">
                    {listaRubros.map((rub) => {
                        return (
                            <option key={rub.idRubro} value={JSON.stringify(rub)}>{rub.nombreRubro}</option>
                        )
                    })}
                </select></Col>
            </Row>
        </Container>
    );
}



export default FormularioBaseAM