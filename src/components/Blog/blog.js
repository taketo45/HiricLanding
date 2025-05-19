import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Blog Box
import BlogBox from "./blog-box";

class Blog extends Component {
  state = {
    blogs: [
      {
        id: 1,
        image: "assets/images/blog/img-1.jpg",
        topic: "プロダクト情報",
        title: "Toruneが目指す「思い出の価値向上」とは",
        description:
          "イベントを自動で撮影し、プライバシーに配慮しながら活用・共有・販売するToruneのビジョンについて解説します...",
        link: "",
      },
      {
        id: 2,
        image: "assets/images/blog/img-2.jpg",
        topic: "開発者ブログ",
        title: "AIによる写真処理技術の進化",
        description:
          "Toruneで活用している顔認識技術と自動トリミング処理がどのようにイベント写真の価値を高めるのか、技術的側面から紹介します。",
        link: "",
      },
      {
        id: 3,
        image: "assets/images/blog/img-3.jpg",
        topic: "事例紹介(想定)",
        title: "マラソン大会での活用事例(ダミーデータ)",
        description:
          "全国規模のマラソン大会でToruneを導入いただき、参加者の満足度向上と主催者の収益アップにつながった成功事例をご紹介します。",
        link: "",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light active" id="blog">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="最新情報"
              description="Transform Navi株式会社とToruneの最新情報をお届けします。プロダクトの新機能やアップデート情報、導入事例などを定期的に発信していきます。"
            />

            <Row className="mt-4">
              {/* Render blog boxes */}
              {this.state.blogs.map((blog, key) => (
                <BlogBox key={key} blog={blog} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;