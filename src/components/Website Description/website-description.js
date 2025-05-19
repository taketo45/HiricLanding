import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class WebsiteDescription extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-web-desc">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="text-white">あなたのイベントに新たな価値を</h2>
                <p className="pt-3 home-desc mx-auto">
                  結婚式、マラソン大会、コンサート、学校行事など、あらゆるイベントで
                  プライバシーに配慮した自動撮影と写真共有を実現。
                  思い出の瞬間を最高の形で残すお手伝いをします。
                </p>
                <Link
                  to="#"
                  className="btn btn-light mt-5 waves-effect waves-light"
                >
                  料金プランを見る
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDescription;