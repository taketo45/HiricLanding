import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
  state = {
    services: [
      {
        title: "自動イベント撮影",
        icon: "pe-7s-camera",
        description:
          "コンサートやスポーツ観戦を楽しみながら、同時に撮影するのは難しいもの。Toruneなら会場内の自動撮影カメラを活用し、イベントを余すことなく記録します。",
      },
      {
        title: "肖像権管理",
        icon: "pe-7s-id",
        description:
          "参加者登録時に明示的な肖像権利用許諾を確認。プライバシーを尊重した写真共有システムにより、安心して思い出を形に残せます。",
      },
      {
        title: "AI写真処理",
        icon: "pe-7s-magic-wand",
        description:
          "AIによる顔認識技術を活用し、参加者が映った写真を自動でピックアップ。最適な画角へのトリミングや第三者の映り込みを適切に加工します。",
      },
      {
        title: "グループ管理",
        icon: "pe-7s-users",
        description:
          "家族や友人などのグループを登録することで、同じアングルの写真を共有。それぞれにとって最高の一枚との出会いを実現します。",
      },
      {
        title: "収益化支援",
        icon: "pe-7s-cash",
        description:
          "イベント主催者は参加者の写真をストアで販売することで収益化が可能。マラソン大会やコンサートなど様々なイベントで新たな収益源を創出します。",
      },
      {
        title: "SNS対応",
        icon: "pe-7s-share",
        description:
          "SNS投稿用の写真を簡単に取得。投稿NGの方の顔には自動でぼかしが入り、安心して思い出をシェアできます。",
      },
      {
        title: "スライドショー作成",
        icon: "pe-7s-display1",
        description:
          "イベントの終盤では、主役が映っている写真を自動で選定し、感動的なスライドショーをほぼ自動で作成できます。",
      },
      {
        title: "映像編集",
        icon: "pe-7s-film",
        description:
          "マラソン競技などでは参加者毎にAIが本人映り込みシーンをピックアップし、参加者専用の思い出動画を自動生成します。",
      },
      {
        title: "顔認証受付",
        icon: "pe-7s-ticket",
        description:
          "事前登録した顔写真を使って当日の受付をスムーズに。出欠管理も効率化され、イベント運営をサポートします。",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="サービス内容"
              description="Toruneは、イベントでの撮影から写真の活用・共有・販売までを一貫してサポート。参加者のプライバシーに配慮しながら、イベントの最高の瞬間を記録に残し、新たな体験と価値を提供します。"
            />

            <Row className="mt-5">
              {/* render service box */}
              {this.state.services.map((service, key) => (
                <ServiceBox
                  key={key}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;