import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                />
                <Card.Body>
                  <p className="product-name-on-card">iPhone14 Pro</p>
                  <p className="product-price-on-card">200,000円</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                />
                <Card.Body>
                  <p className="product-name-on-card">iPhone14</p>
                  <p className="product-price-on-card">200,000円</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-04.png?220909"
                />
                <Card.Body>
                  <p className="product-name-on-card">iPhone14</p>
                  <p className="product-price-on-card">200,000円</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-12.png?220909"
                />
                <Card.Body>
                  <p className="product-name-on-card">iPhone14</p>
                  <p className="product-price-on-card">200,000円</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-08.png?220909"
                />
                <Card.Body>
                  <p className="product-name-on-card">iPhone14</p>
                  <p className="product-price-on-card">200,000円</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-13/pht-device-00.png?220309-01"
                />
                <Card.Body>
                  <p className="product-name-on-card">iPhone13</p>
                  <p className="product-price-on-card">200,000円</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
