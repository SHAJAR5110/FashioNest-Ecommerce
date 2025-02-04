// src/app/Productlist/page.js
import ProductListClient from "./ProductListClient"; // Client Component
import { getProducts } from "../UIcomponents/getProducts"; // Helper function for fetching data

export default async function ProductListPage() {
  const products = await getProducts(); // Fetch data on the server

  return <ProductListClient products={products} />; // Pass data to Client Component
}