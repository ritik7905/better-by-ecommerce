import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { useProductContext } from "../../context/productContext";

import {
  AddToCart,
  FormatPrice,
  MyImages,
  PageNavigation,
} from "../../components/allComponentsTogether";
import { Col, Rate, Row } from "antd";

// styles
import "./styles.scss";

const API = "https://api.pujakaitem.com/api/products";

const SingleProductDetails = () => {
  const { isSingleLoading, getSingleProduct, singleProduct } =
    useProductContext();

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  const {
    id: elias,
    name,
    company,
    price,
    reviews,
    stock,
    stars,
    description,
    image,
  } = singleProduct;

  if (isSingleLoading) {
    return <div className="page-loading">Loading......</div>;
  }

  console.log(stars);
  return (
    <section className="single-product-details">
      {/* Page-navigation */}
      <PageNavigation title={name} />
      <div className="product-details-container container">
        <Row>
          <Col md={12} className="product-image-filter">
            <div className="product-images">
              {/* Product-Images */}
              <MyImages imgs={image} />
            </div>
          </Col>
          <Col md={11} className="product-info">
            <h2 className="product-name">{name}</h2>
            <div className="product-ratings">
              <Rate disabled value={stars} />
            </div>
            <p className="product-reviews">{reviews} Reviews</p>

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p className="description">{description}</p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Product Delivery</p>
              </div>
              <div className="product-warranty-data">
                <MdOutlineSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span>{stock > 0 ? "In Stock" : "No Available"}</span>
              </p>
              <p>
                {" "}
                ID: <span>{elias}</span>
              </p>
              <p>
                Brand:
                <span>{company}</span>
              </p>
            </div>
            <hr />
            <div>{stock > 0 && <AddToCart product={singleProduct} />}</div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SingleProductDetails;
