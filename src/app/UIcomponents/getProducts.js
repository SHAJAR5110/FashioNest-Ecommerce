// src/lib/getProducts.js
import { client } from "../../../sanityClient";

export async function getProducts() {
  const query = `*[_type == "product"]{
    name,
    description,
    price,
    discountPercentage,
    tags,
    image{
      asset->{
        url
      }
    },
    rating,
    rateCount,
    id
  }`;
  const products = await client.fetch(query);
  return products;
}