
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerItems: [
        {
          title: "Transform Navi",
          icon: "mdi mdi-navigation-variant",
          links: [
            { linkTitle: "ホーム", link: "#home" },
            { linkTitle: "会社情報", link: "#features" },
            { linkTitle: "わたしたち", link: "#about" },
            { linkTitle: "お問い合わせ", link: "#contact" },
          ],
        },
        {
          title: "サービス情報",
          links: [
            { linkTitle: "サービス", link: "#services" },
            { linkTitle: "利用規約", link: "#" },
            { linkTitle: "料金プラン", link: "#pricing" },
            { linkTitle: "導入事例", link: "#testimonial" },
          ],
        },
        {
          title: "サポート",
          links: [
            { linkTitle: "ニュース", link: "#blog" },
            { linkTitle: "お問い合わせ", link: "#contact" },
          ],
        },
      ],
      isSwitchToggle: false,
    };
    this.toggleSwitcher = this.toggleSwitcher.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  setTheme = (color) => {
    document.getElementById("colorTheme").href =
      "assets/colors/" + color + ".css";
  };

  toggleThem = () =>{
    if (document.body.getAttribute("data-bs-theme") === "light") {
      document.body.setAttribute('data-bs-theme', 'dark');
    }else{
      document.body.setAttribute('data-bs-theme', 'light');
    }
    
  }

  toggleSwitcher = () => {
    this.setState({ isSwitchToggle: !this.state.isSwitchToggle });
  };
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              {this.state.footerItems.map((item, key) => (
                <Col lg="3" className="mt-4" key={key}>
                {item.icon ?  
                <Link className="footer-logo text-uppercase" href="#">
                        <i className={item.icon}></i>
                        <span>{item.title}</span>
                    </Link>
                    :
                  <h4>{item.title}</h4>}
                  <div className="text-muted mt-4">                    <ul className="list-unstyled footer-list">
                      {item.links.map((link, key) => (
                        <li key={key}>
                          <a href={link.link} onClick={(e) => {
                            if (link.link.startsWith('#')) {
                              e.preventDefault();
                              const targetId = link.link.substring(1);
                              const element = document.getElementById(targetId);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }
                          }}>{link.linkTitle}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}

              <Col lg="3" className="mt-4">
                <h4>ニュースレター登録</h4>
                <div className="text-muted mt-4">
                  <p>
                    Toruneの最新情報やイベント撮影に関するヒント、プライバシー配慮型写真共有の最新トレンドなどをお届けします。定期的な情報をご希望の方はぜひご登録ください。
                  </p>
                </div>
                <Form className="form subscribe">
                  <Input
                    placeholder="メールアドレス"
                    className="form-control"
                    required
                  />
                  <Link to="#" className="submit">
                    <i className="pe-7s-paper-plane"></i>
                  </Link>
                </Form>
              </Col>
            </Row>
          </Container>
        </footer>

        <FooterLinks />


        <div
          id="style-switcher"
          className={this.state.isSwitchToggle ? "show" : " "}
          style={{ left: this.state.isSwitchToggle ? "0px" : "-189px" }}
        >
          <div>
            <h3>カラーを選択</h3>
            <ul className="pattern">
              <li>
                <Link
                  className="color1"
                  onClick={() => this.setTheme("cyan")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color2"
                  onClick={() => this.setTheme("red")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color3"
                  onClick={() => this.setTheme("green")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color4"
                  onClick={() => this.setTheme("pink")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color5"
                  onClick={() => this.setTheme("blue")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color6"
                  onClick={() => this.setTheme("purple")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color7"
                  onClick={() => this.setTheme("orange")}
                  to="#"
                ></Link>
              </li>
              <li>
                <Link
                  className="color8"
                  onClick={() => this.setTheme("yellow")}
                  to="#"
                ></Link>
              </li>
            </ul>
          </div>
          <div className="bottom">
          <Link to="#" id="mode" className="mode-btn text-white" onClick={this.toggleThem}>
                <i className="mdi mdi-weather-sunny bx-spin mode-light"></i>
                <i className="mdi mdi-moon-waning-crescent mode-dark"></i>
            </Link>
            <Link
              to="#"
              onClick={this.toggleSwitcher}
              className="settings rounded-right"
            >
              <i className="mdi mdi-cog"></i>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;