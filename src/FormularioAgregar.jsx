import PropTypes from 'prop-types';

import { Producto, Rubro, listaRubros, retornarID } from "./MODEL";

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
        console.log(product)

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
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <td><label>Nombre</label></td>
                            <td><input id="name" type="text" /></td>
                        </tr>
                        <tr style={{height:"80px"}}>
                            <td><label>Descripcion</label></td>
                            <td><textarea className='form-control' id="description" cols="128" rows="8" /></td>
                        </tr>
                        <tr>
                            <td><label>Precio</label></td>
                            <td><input id="price" type="number" step={0.01} min={0} defaultValue={0}/></td>
                        </tr>
                        <tr>
                            <td><label>Rubro</label></td>
                            <td><select className='form-select' id="type">
                                {listaRubros.map((rub) => {
                                    return (
                                        <option key={rub.idRubro} value={JSON.stringify(rub)}>{rub.nombreRubro}</option>
                                    )
                                })}
                            </select></td>
                        </tr>
                        <tr>
                            <td><label>Ingresar:</label></td>
                            <td><label><input type="submit" value={"Ingresar Producto"} /></label></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

FormularioAgregar.propTypes = {
    products: PropTypes.array,
    setProducts: PropTypes.func,
}

export default FormularioAgregar;