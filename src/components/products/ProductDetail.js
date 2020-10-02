import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInputs";

const ProductDetail = ({ categories, product, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Dəyiş" : "Əlavə et"}</h2>
      <TextInput
        name="productName"
        label="Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />

      <SelectInput
        name="categoryId"
        label="Kateqoriyalar"
        value={product.categoryId || ""}
        defaultOption="Axtar"
        options={categories}
        onChange={onChange}
        error={errors.categoryId}
      />
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />
      <TextInput
        name="unitsInStock"
        label="In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />
      <TextInput
        name="quantityPerUnit"
        label="Quantity"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />

      <button type="submit" className="btn btn-success">
        Təsdiqlə
      </button>
    </form>
  );
};

export default ProductDetail;
