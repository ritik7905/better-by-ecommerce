import { Col, Row } from "antd";
import React from "react";

// styles
import "./styles.scss";

const MyImages = ({ imgs }) => {
  console.log(imgs);
  return (
    <Row className="image-filter">
      <Col md={6} className="img-container">
        <Row className="images-row">
          {imgs?.map((curElm) => {
            return (
              <Col md={24}>
                <div className="product-img">
                  <img src={curElm.url} alt="images" id="responsive" />
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col md={15}>Hello</Col>
    </Row>
  );
};

export default MyImages;
