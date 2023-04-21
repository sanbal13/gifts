import React from 'react';

export default function Gallery() {
  return (
    <>
      <div className="section-header">Gallery</div>
      <div className="flex flex-wrap container">
        <div className="gallery-img">
          <img
            src="./images/gallery/electronics_gadget.jpg"
            alt="electronics gadget"
          />
          <div className="img-description">Electronic Gadgets</div>
        </div>
        <div className="gallery-img">
          <img
            src="./images/gallery/fashion_accessories.jpg"
            alt="fashion_accessories"
          />
          <div className="img-description">Fashion Accessories</div>
        </div>
        <div className="gallery-img">
          <img
            src="./images/gallery/makeup_kits.jpg"
            alt="makeup_kits"
          />
          <div className="img-description">Makeup Kits</div>
        </div>
        <div className="gallery-img">
          <img
            src="./images/gallery/hygiene_products.jpg"
            alt="hygiene_products"
          />
          <div className="img-description">Hygiene Products</div>
        </div>
      
        <div className="gallery-img">
          <img
            src="./images/gallery/electronics_gadget_2.jpg"
            alt="electronics gadget_2"
          />
          <div className="img-description">Electronic Gadgets</div>
        </div>
        <div className="gallery-img">
          <img
            src="./images/gallery/fashion_accessories_2.jpg"
            alt="fashion_accessories_2"
          />
          <div className="img-description">Fashion Accessories</div>
        </div>
        <div className="gallery-img">
          <img
            src="./images/gallery/makeup_kits_2.jpg"
            alt="makeup_kits_2"
          />
          <div className="img-description">Makeup Kits</div>
        </div>
        <div className="gallery-img">
          <img
            src="./images/gallery/hygiene_products_2.jpg"
            alt="hygiene_products_2"
          />
          <div className="img-description">Hygiene Products</div>
        </div>
      </div>
    </>
  );
}
