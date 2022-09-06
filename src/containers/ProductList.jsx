import React from 'react';

import ProductItem from '../components/ProductItem.jsx';
import useGetProducts from '../hooks/useGetProducts.js';

import '../styles/ProductList.scss';


const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	return <div>
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}

			</div>
		</section>
	</div>;
};

export default ProductList;
