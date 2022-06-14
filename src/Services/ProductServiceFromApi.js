import axios from "axios";
import { toast } from "react-toastify";

export const getProducts = async () => {
  try {
    const productResponse = await axios.get("https://fakestoreapi.com/products/");
    const products = await productResponse.data;
    return products;
  } catch (e) {
    console.log("Error Occured::", e);
    toast.error("Fetching products unsuccessful");
  }
};
export const updateProduct = async (title, price, desc, category) => {
  try {
    const productResponse = await axios.put("https://fakestoreapi.com/products/", {
      title,
      price,
      desc,
      category,
    });
    console.log("productResponse::", productResponse);
    toast.succes("Product updating uccessful");
  } catch (e) {
    console.log("Error Occured::", e);
    toast.error("Product updating unsuccessful");
  }
};
export const addProduct = async (title, price, desc, category) => {
  try {
    const productResponse = await axios.post("https://fakestoreapi.com/products/", {
      title,
      price,
      desc,
      category,
    });
    console.log("productResponse::", productResponse);
    toast.success("Product adding successful");
  } catch (e) {
    console.log("Error Occured");
    toast.error("Product adding unsuccessful");
  }
};
export const deleteProduct = async (id) => {
  try {
    const productResponse = await axios.delete("https://fakestoreapi.com/products/" + id);
    console.log("productResponse::", productResponse);
    toast.success("Product deleting successful");
  } catch (e) {
    console.log("Error Occured");
    toast.error("Product deleting unsuccessful");
  }
};
