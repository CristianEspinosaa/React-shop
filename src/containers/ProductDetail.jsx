import React from 'react';

import ProductInfo from '../components/ProductInfo.jsx';

import '../styles/ProductDetail.scss';

const ProductDetail = () => {
  return <div>
      <aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
  </div>;
};

export default ProductDetail;
