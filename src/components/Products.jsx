import React from 'react'

const Products = ({product}) => {

    const {imageUrl, installments, listPrice, price, productId, productName, stars} = product


  return (
    <div>{productName}</div>
  )
}

export default Products