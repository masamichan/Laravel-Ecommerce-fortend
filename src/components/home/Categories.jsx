import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>CATEGORIES</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                      />
                      <h5 className="category-name">iPhone</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                      />
                      <h5 className="category-name">iPhone</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                      />
                      <h5 className="category-name">iPhone</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                      />
                      <h5 className="category-name">iPhone</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                      />
                      <h5 className="category-name">iPhone</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                      />
                      <h5 className="category-name">iPhone</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                      />
                      <h5 className="category-name">iPhone</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://network.mobile.rakuten.co.jp/assets/img/product/iphone/iphone-14-pro/pht-device-00.png?220909"
                      />
                      <h5 className="category-name">iPhone</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
