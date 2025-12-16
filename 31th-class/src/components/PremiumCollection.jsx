import React from 'react'
import productImage1 from '../assets/homeImage1.png'
import productImage3 from '../assets/homeImage3.png'
import productImage4 from '../assets/homeImage4.png'
import productImage5 from '../assets/homeImage5.png'
import MainTitles from './MainTitles'
import Cards from './Cards'


const products = [
  {
    image: productImage5,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage4,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage3,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage1,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage3,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage1,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage4,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage1,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage5,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage1,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage5,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },
  {
    image: productImage3,
    description: "Denim Peshawari Chappal (NDL x KP Shop Collaboration)",
    oldPrice: 5000,
    salePrice: 4500,
    rating: 4.9,
    ratingNumber: "(23)"
  },

   
];


const PremiumCollection = () => {
  return (
    <div>
      <MainTitles mainTitle="Premium Collection" sortBtn="Sort By" iconBtn="Icon"/>
      <div className="flex items-center justify-center my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%]">
      <Cards productsData={products}/>
      </div>
      </div>
    </div>
  )
}

export default PremiumCollection
