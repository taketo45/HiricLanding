import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <Row className="align-items-center">
              <Col lg="5" className="order-2 order-lg-1">
                <div className="features-box mt-5 mt-lg-0">
                  <h3>
                    イベント撮影を自動化し、プライバシーに配慮した写真活用を実現
                  </h3>
                  <p className="text-muted web-desc">
                    Toruneは、イベントでの思い出を最大限に活かすための画期的なサービスです。主催者と参加者の双方にとって、安心して写真を共有・活用できる環境を提供します。
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li className="">参加者の同意に基づく明示的な肖像権管理</li>
                    <li className="">
                      AIによる自動写真選定と最適なトリミング処理
                    </li>
                    <li className="">プライバシーに配慮した第三者の映り込み加工</li>
                  </ul>
                  <Link
                    to="#"
                    className="btn btn-primary mt-4 waves-effect waves-light"
                  >
                    詳細を見る <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>
              </Col>
              <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
                <div className="features-img mx-auto me-lg-0">
                  <img
                    src="assets/images/growth-analytics.svg"
                    alt="イベント自動撮影サービス"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;