import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from "./pricing-box";

class Pricing extends Component {
  state = {
    pricings: [
      {
        id: 1,
        title: "スタンダード",
        price: "29,800",
        duration: "イベント",
        features: {
          bandwith: "100名まで",
          onlinespace: "写真100枚",
          support: "メールサポート",
          domain: "7日間",
          hiddenFees: "追加料金なし",
        },
      },
      {
        id: 2,
        title: "プロフェッショナル",
        price: "49,800",
        duration: "イベント",
        isRibbon: true,
        features: {
          bandwith: "300名まで",
          onlinespace: "写真500枚",
          support: "優先サポート",
          domain: "30日間",
          hiddenFees: "追加料金なし",
        },
      },
      {
        id: 3,
        title: "エンタープライズ",
        price: "98,000",
        duration: "イベント",
        features: {
          bandwith: "無制限",
          onlinespace: "写真無制限",
          support: "24時間サポート",
          domain: "60日間",
          hiddenFees: "追加料金なし",
        },
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="pricing">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="料金プラン"
              description="イベントの規模や需要に合わせて選べる3つのプランをご用意しました。写真販売による収益化も可能で、イベント主催者様の新たな収入源としてご活用いただけます。"
            />

            <Row className="mt-5">
              {/* Render Pricing Box */}
              {this.state.pricings.map((pricing, key) => (
                <PricingBox key={key} pricing={pricing} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;