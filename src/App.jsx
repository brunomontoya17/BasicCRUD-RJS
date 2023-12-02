import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioAgregar from './FormularioAgregar'
import { Producto, Rubro, listaRubros } from "./MODEL";
import { Container, Row, Col } from 'react-bootstrap'
import FormularioSelect from './FormularioSelect'
import { set } from 'react-hook-form'

function App() {
  
  const [listaProd, setListaProd] = useState(new Array());
  return (
    <>
      <Container>
        <Row>
          <Col>
            <FormularioAgregar products={listaProd} setProducts={setListaProd}/>
          </Col>
          <Col>
            <FormularioSelect listaProd={listaProd} setListaProd={setListaProd}/>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default App
