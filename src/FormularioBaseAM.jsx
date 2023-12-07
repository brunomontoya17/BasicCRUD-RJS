import PropTypes from 'prop-types';
import { listaRubros } from "./MODEL";
import { Container, Row, Col } from 'react-bootstrap';
import { Behavior } from "./CONFIG";

function FormularioBaseAM({ behavior, producto, setProducto }) {
    return (
        <Container>
            <Row>
                <Col md="auto"><label htmlFor="name">Nombre:</label></Col>
                <Col>
                    {(() => {
                        if (behavior === Behavior.agregar)
                            return (<input id="name" type="text" />)
                        if (behavior === Behavior.modificar)
                            return (<input id="name" type="text" value={producto.nombre}
                                onChange={(e) => {
                                    setProducto(({
                                        ...producto,
                                        nombre: e.target.value
                                    }));
                                }} />)
                    })()}
                </Col>
            </Row>
            <Row>
                <Col md="auto"><label htmlFor="description">Descripcion</label></Col>
                <Col>
                    {(() => {
                        if (behavior === Behavior.agregar)
                            return (<textarea id="description" className='form-control' cols="128" rows="3" />)
                        if (behavior === Behavior.modificar)
                            return (<textarea value={producto.descripcion} className='form-control'
                                id="description" cols="128" rows="3"
                                onChange={(e) => {
                                    setProducto(({
                                        ...producto,
                                        descripcion: e.target.value
                                    }));
                                }} />)
                    })()}
                </Col>
            </Row>
            <Row>
                <Col md="auto"><label htmlFor='price'>Precio</label></Col>
                <Col>
                    {(() => {
                        if (behavior === Behavior.agregar)
                            return (<input id="price" type="number" step={0.01} min={0} defaultValue={0} />)
                        if (behavior === Behavior.modificar)
                            return (<input id="price" type="number" value={producto.precio} step={0.01} min={0}
                                onChange={(e) => {
                                    setProducto(({
                                        ...producto,
                                        precio: e.target.value
                                    }));
                                }} />)
                    })()}
                </Col>
            </Row>
            <Row>
                <Col md="auto"><label htmlFor='type'>Rubro</label></Col>
                <Col>
                    {(() => {
                        if (behavior === Behavior.agregar)
                            return (<select className='form-select' id="type">
                                {listaRubros.map((rub) => {
                                    return (
                                        <option key={rub.idRubro} value={JSON.stringify(rub)}>{rub.nombreRubro}</option>
                                    )
                                })}
                            </select>)
                        if (behavior === Behavior.modificar)
                            return (<select className='form-select' id="type" value={JSON.stringify(producto.rubro)}
                                onChange={(e) => {
                                    setProducto(({
                                        ...producto,
                                        rubro: JSON.parse(e.target.value)
                                    }));
                                }}>
                                {listaRubros.map((rub) => {
                                    return (
                                        <option key={rub.idRubro} value={JSON.stringify(rub)}>{rub.nombreRubro}</option>
                                    )
                                })}
                            </select>)
                    })()}
                </Col>
            </Row>
        </Container>
    );
}

FormularioBaseAM.propTypes = {
    setProducto: PropTypes.func,
}

export default FormularioBaseAM