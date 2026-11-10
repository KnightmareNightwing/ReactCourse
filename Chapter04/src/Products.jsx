import React from 'react'
import Product from './Product'

const getProducts = () => {
  return [
    {
      imageUrl: "https://picsum.photos/seed/product1/150/150",
      productName: "Product 1",
      releasedDate: "May 31, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 4,
      numOfReviews: 2
    },
    {
      imageUrl: "https://picsum.photos/seed/product2/150/150",
      productName: "Product 2",
      releasedDate: "October 31, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 2,
      numOfReviews: 12
    },
    {
      imageUrl: "https://picsum.photos/seed/product3/150/150",
      productName: "Product 3",
      releasedDate: "July 30, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 5,
      numOfReviews: 2
    },
    {
      imageUrl: "https://picsum.photos/seed/product3/150/150",
      productName: "Product 4",
      releasedDate: "July 30, 2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      rating: 5,
      numOfReviews: 2
    }]
}

function Products() {
  const products = getProducts()

  const listProducts = products.map((product) =>
    <Product key={product.productName} data={product} />
  )

  return (
    <div>
      <ul>{listProducts}</ul>
    </div>
  )
}

export default Products