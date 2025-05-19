import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class GetStarted extends Component {
    render() {
        return (
            <React.Fragment>
        <section className="section section-lg bg-get-start">
            <div className="bg-overlay"></div>
            <Container>
                <Row>
                    <Col lg={{size :8, offset:2}} className="text-center">
                        <h1 className="get-started-title text-white">さあ、始めましょう</h1>
                        <div className="section-title-border mt-4 bg-white"></div>
                        <p className="section-subtitle font-secondary text-white text-center pt-4">Toruneがあなたのイベントに新たな価値をもたらします。参加者の思い出を最高の形で残し、プライバシーに配慮しながら共有・活用できる環境を提供します。まずは無料相談からお気軽にお問い合わせください。</p>
                        <Link to="#" className="btn btn-light waves-effect mt-4">お問い合わせ <i className="mdi mdi-arrow-right"></i> </Link>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default GetStarted;