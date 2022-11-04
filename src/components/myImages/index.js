import { Col, Row } from "antd";
import React from "react";
import { useState } from "react";

// styles
import "./styles.scss";

const MyImages = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  console.log(mainImage);

  const getSelectImage = (curImg) => {
    setMainImage(imgs[curImg]);
  };
  return (
    <Row className="image-filter">
      <Col md={6} className="img-container">
        <Row className="images-row">
          {imgs.map((curElm, i) => {
            return (
              <Col md={24} key={i} onClick={() => getSelectImage(i)}>
                <div className="product-img">
                  <img src={curElm.url} alt="images" id="responsive" />
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
      {/* Main image column */}
      <Col md={15} className="main-screen">
        <img src={mainImage.url} alt={"filename"} />
      </Col>
    </Row>
  );
};

export default MyImages;
