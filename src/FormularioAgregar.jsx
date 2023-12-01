import PropTypes from 'prop-types';

import { Producto, Rubro, listaRubros } from "./MODEL";

function FormularioAgregar({ products, setProducts }) {
    const clearForm = () => {
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = 0;
    }

    const readProduct = () => {
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;

        const typeName = document.getElementById("type").value;
        const typeId = document.getElementById("type").value;
        const type = new Rubro(typeId, typeName);

        return new Producto(products.length, name, description, price, type)
    }

    const agregarProducto = (e) => {
        e.preventDefault();

        const product = readProduct()
        console.log(product)
        setProducts([...products, product])
        clearForm();
    }

    return (
        <div>
            <form onSubmit={agregarProducto}>
                <h2>Agregar Producto</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Nombre</label></td>
                            <td><input id="name" type="text" /></td>
                        </tr>
                        <tr>
                            <td><label>Descripcion</label></td>
                            <td><input id="description" type="textarea" cols="128" rows="8" /></td>
                        </tr>
                        <tr>
                            <td><label>Precio</label></td>
                            <td><input id="price" type="number" step={0.01} /></td>
                        </tr>
                        <tr>
                            <td><label>Rubro</label></td>
                            <td><select id="type">
                                {listaRubros.map((rub) => {
                                    return (
                                        <option key={rub.idRubro} value={rub.nombreRubro}>{rub.nombreRubro}</option>
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