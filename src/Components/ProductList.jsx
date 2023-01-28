import React from 'react';
import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const {filter_products,grid_view} = useFilterContext();
  if(grid_view === true){
    return <GridView products={filter_products} />
  }
  if(grid_view === false){
    return <ListView products = {filter_products} />
  }

  return (
    <div>ProductList</div>
  ) 
}

export default ProductList