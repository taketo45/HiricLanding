import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Testimonial Box
import TestimonialBox from "./testimonial-box";

class Testimonials extends Component {
  state = {
    testimonials: [
      {
        id: 1,
        image: "assets/images/testimonials/user-1.jpg",
        name: "斉藤 健一",
        cmpName: "マラソン大会主催者",
        message:
          "「Toruneを導入してから参加者の満足度が大幅に向上しました。ランナー一人ひとりの走っている瞬間を自動で捉え、思い出の動画として販売できるようになり、追加収益にもつながっています。何より参加者からの『最高の思い出になった』という声が嬉しいですね。」",
      },
      {
        id: 2,
        image: "assets/images/testimonials/user-2.jpg",
        name: "田中 美咲",
        cmpName: "結婚式プランナー",
        message:
          "「ウェディングフォトグラファーとして常に課題だったのが、ゲスト全員の表情を捉えることでした。Toruneのおかげで式場のあらゆる角度から新郎新婦とゲストの自然な瞬間を記録でき、さらに肖像権の管理も自動化されて本当に助かっています。」",
      },
      {
        id: 3,
        image: "assets/images/testimonials/user-3.jpg",
        name: "山田 拓也",
        cmpName: "コンサート制作会社",
        message:
          "「アーティストと観客が一体となった感動の瞬間を、より多くの角度から撮影できるようになりました。SNS共有の設定も簡単で、ファンはプライバシーに配慮された形で思い出を共有できます。何より追加収益としての写真販売が好評で、ビジネス面でも大きなメリットを感じています。」",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section" id="testi">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="利用者の声(ヒアリング実施前のダミーデータを表示しています)"
              description="Toruneを活用されているイベント主催者の方々から多くの喜びの声をいただいています。イベントの価値を高め、参加者の満足度を向上させる新しい体験を提供しています。"
            />

            <Row className="mt-5">
              {/* render testimonials box */}
              {this.state.testimonials.map((testimonial, key) => (
                <TestimonialBox key={key} testimonial={testimonial} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonials;