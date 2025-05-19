import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Team Box
import TeamBox from "./team-box";

class AboutUs extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "生貝 武俊(Ikegai Taketoshi)",
        image: "assets/images/team/ceoFace.jpg",
        post: "代表, 開発(Representative, Developer)",
      },
      {
        id: 2,
        name: "非常勤メンバー(non-full-time)",
        image: "assets/images/team/comming.png",
        post: "開発(Developer)",
      }
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container>
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <div className="about-title mx-auto text-center">
                  <h2 className="font-weight-light">
                    Transform Navi株式会社{" "}
                  </h2>
                  <p className="text-muted pt-4">
                    Web/アプリをデザイン・開発・運用までトータルでプロデュース。
                    プロジェクトマネジメント・システム監査、Javascript/Typescript/React/Next.jsをベースにしたWebシステム開発、React NativeをベースにしたiOS、Androidアプリケーション開発、事業企画・システム企画・システム開発・運用までトータルでカバーします。
                    Toruneを初の商用サービスとしてリリースしました。
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5 flex justify-center">
              {/* Render Team members */}
              {this.state.members.map((member, key) => (
                <TeamBox
                  key={key}
                  name={member.name}
                  image={member.image}
                  post={member.post}
                />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
