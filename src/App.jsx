import { useState } from 'react'
import FormularioAgregar from './FormularioAgregar'
import { Container, Row, Col } from 'react-bootstrap'
import FormularioSelect from './FormularioSelect'

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
