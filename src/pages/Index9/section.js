import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

//Import Particles
// import Particles from "react-particles-js";

//Importing Modal
import ModalSection from "../../components/common/ModalSection";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    //particales
    const particlesInit = async (main) => {
      console.log(main);
      await loadFull(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
    return (
      <React.Fragment>
        <section className="section bg-home vh-100 active" id="home">
          <div className="bg-overlay">              <Particles
             
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  style:{
                    position:"absolute"
                  },
                  // フレームレートの制限（低めに設定すると処理負荷が減り、動きも安定する）
                  fpsLimit: 60,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 100,
                        // ホバー時の反発効果の持続時間（短くすると加速が抑えられる）
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.3,
                      width: 2,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      // 画面端での挙動（out:画面外へ出て反対側から再登場）
                      outModes: {
                        default: "out",
                      },
                      random: false,
                      // 動く速度（小さくすると遅くなる）
                      speed: 0.8,
                      straight: false,
                      // 速度の減衰（0で一定速度を維持）
                      decay: 0,
                      // 重力効果を無効化
                      gravity: {
                        enable: false
                      }
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 900,
                      },
                      value: 80,
                      // パーティクル数の上限
                      limit: 100
                    },
                    opacity: {
                      value: 0.4,
                      // 透明度アニメーションを無効化
                      animation: {
                        enable: false
                      }
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 5 },
                      // サイズアニメーションを無効化
                      animation: {
                        enable: false
                      }
                    },
                  },
                  detectRetina: true,
                  // フルスクリーンモードを無効化（指定領域内でのみ描画）
                  fullScreen: {
                    enable: false
                  },
                }}
              />
            </div>
         
              <Container className="slidero z-3" >
                <Row className="justify-content-center">
                  <Col
                    lg={{ size: 8 }}
                    className="text-white text-center"
                  >
                    <h4 className="home-small-title">Torune</h4>
                    <h1 className="home-title">
                      イベントを自動で撮影<br />プライバシーに配慮し活用・共有・販売
                    </h1>
                    <p className="pt-3 home-desc mx-auto">
                      Toruneは、イベントの最高の瞬間を安心して記録に残せるサービスです。
                    </p>
                    <p
                      className="play-shadow mt-4"
                      data-bs-toggle="modal"
                      data-bs-target="#watchvideomodal"
                    >
                      <Link
                        onClick={this.callModal}
                        to="#"
                        className="play-btn video-play-icon"
                      >
                        <i className="mdi mdi-play text-center"></i>
                      </Link>
                    </p>
                  </Col>
                </Row>
              </Container>
              {/* Render ModalSection Component for Modal */}
              <ModalSection ref="child" channel="vimeo" videoId="763629064" />
         
         
        </section>
      </React.Fragment>
    );
  }
}

export default Section;