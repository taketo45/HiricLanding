import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class PricingBox extends Component {
  render() {
    return (
      <React.Fragment>
        <Col lg="4">
          <div className="text-center pricing-box ">
            {this.props.pricing.isRibbon ? (
              <div className="ribbon-box">
                <span>Popular</span>
              </div>
            ) : null}
            <h4 className="text-uppercase">{this.props.pricing.title}</h4>
            <h1>{this.props.pricing.price}円</h1>
            <h6 className="text-uppercase text-muted">
              Billing Per {this.props.pricing.duration}
            </h6>
            <div className="plan-features mt-5">
              <p>
                アカウント数:{" "}
                <b className="text-primary">
                  {this.props.pricing.features.bandwith}
                </b>
              </p>
              <p>
                ストレージ:{" "}
                <b className="text-primary">
                  {this.props.pricing.features.onlinespace}
                </b>
              </p>
              <p>
                サポート:{" "}
                <b className="text-primary">
                  {this.props.pricing.features.support}
                </b>
              </p>
              <p>
                利用期間：{" "}
                <b className="text-primary">
                  {this.props.pricing.features.domain}
                </b>
              </p>
              <p>
                追加料金：{" "}
                <b className="text-primary">
                  {this.props.pricing.features.hiddenFees}
                </b>
              </p>
            </div>
            <Link
              to="#"
              className="btn btn-primary waves-effect waves-light mt-5"
            >
              購入
            </Link>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default PricingBox;
