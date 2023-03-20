import { useState } from "react";

export const ObjectComponent = () => {
  const initialProduct = {
    id: 0,
    name: "Object",
    price: 100.0,
  };

  const [product, setProduct] = useState(initialProduct);
  const [errors, setErrors] = useState({});

  const changedValue = (e) => {
    e.preventDefault();
    setProduct({
      id: product.id,
      name: e.target.value,
      price: product.price,
    });
  };

  const changedValue2 = (e) => {
    e.preventDefault();
    setProduct({
      ...product,
      price: e.target.value,
    });
  };

  const save = (e) => {
    e.preventDefault();
    if (!isValid()) {
      alert("geçersiz");
      return;
    }
    alert(product.id + product.name + product.price);
  };

  const isValid = () => {
    let valid = true;
    let errors = {};
    if (product.name.length < 3) {
      valid = false;
      errors.name = "ad en az 3 olmalı";
    }
    if (product.price < 0) {
      valid = false;
      errors.price = "fiyat eksi olamaz";
    }
    setErrors(errors);
    return valid;
  };

  return (
    <div className="container">
      <div className="input-group">
        <ul>
          {Object.keys(errors).map((key) => (
            <li key={key}>{errors[key] ? errors[key] : ``}</li>
          ))}
        </ul>

        <form onSubmit={save}>
          <h1 className="text-primary">{product.id} </h1>
          <h2 className="text-secondary">{product.name} </h2>
          <h3 className="text-danger">{product.price}</h3>
          Öz:{product.id} <br />
          <input
            type="text"
            name="name"
            value={product.name || ""}
            onChange={changedValue}
            className="input-group-text"
          />
          <br />
          <input
            type="text"
            name="price"
            value={product.price || ""}
            onChange={changedValue2}
            className="input-group-text"
          />
          <br />
          <input type="submit" value="sakla" className="input-group-text" />
        </form>
      </div>
    </div>
  );
};
