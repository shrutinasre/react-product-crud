import React, { Component, useState } from "react";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../Services/ProductServiceFromApi";
import ProductForm from "./ProductForm";
import { Table, Modal, Button } from "react-bootstrap";

function ProductList() {
  const defaultFormValues = {
    id: 0,
    title: "",
    desc: "",
    category: "",
    price: "",
  };
  const [productArray, setProductArray] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(defaultFormValues);

  useEffect(() => {
    loadProducts();
  }, []);

  const handleModalClose = () => {
    setModalShow(!modalShow);
  };

  const loadProducts = async () => {
    setProductArray(await getProducts());
  };

  const handleDelete = (productId) => {
    console.log("handleDelete::", productId);
    deleteProduct(productId);
    loadProducts();
    console.log("handleDelete productArray::", productArray);
  };
  const handleEdit = (product) => {
    setModalShow(true);
    console.log("handleEdit::", product);
    setSelectedProduct(product);
  };
  const handleFormReset = () => {
    console.log("from handleFormReset");
    setSelectedProduct(defaultFormValues);
  };

  const handleUpdateList = () => {
    //setProductArray(getProducts());
    setModalShow(false);
  };
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mt-3">Product List</h2>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSelectedProduct(defaultFormValues);
                handleModalClose();
              }}
            >
              + Add New Product
            </button>
          </div>

          <hr />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Product Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {productArray ? (
            productArray.map((product, idx) => {
              console.log("idx", idx);
              return (
                <tr key={idx}>
                  <td className="text-center">{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.desc}</td>
                  <td>{product.price}</td>
                  <td className="text-center">
                    <Button
                      variant="danger"
                      className="me-2"
                      onClick={() => {
                        handleDelete(product.id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => {
                        handleEdit(product);
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </Table>

      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct.id > 0 ? "Update Product" : "Add New Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm Product={selectedProduct} resetForm={handleFormReset} showModal={setModalShow} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductList;
