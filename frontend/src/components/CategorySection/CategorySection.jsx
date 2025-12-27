import React, { useContext } from 'react'
import './categorysection.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import { CategoryContext } from '../../context/CategoryProvider'


function CategorySection() {

  const {categories} = useContext(CategoryContext);

  return (
    <>
      <div className="category-section-wrapper">
        <div className="container">
            <div className="row">
                {categories.map((category, index) => <CategoryCard key={index} image={category.image} title={category.name} slug={category.slug}/>)}
            </div>
        </div>
      </div>
    </>
  )
}

export default CategorySection
