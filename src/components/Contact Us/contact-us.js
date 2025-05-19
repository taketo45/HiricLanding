import React from "react";
import { Container, Row, Col, Button, FormFeedback, Form, Input } from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Section Title
import SectionTitle from "../common/section-title";

const ContactUs = () => {
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
        name: '',
        email: '',
        subject: '',
    },
    validationSchema: Yup.object({
        name: Yup.string().required("お名前を入力してください"),
        email: Yup.string().required("メールアドレスを入力してください"),
        subject: Yup.string().required("件名を入力してください"),
    }),
    onSubmit: (values) => {
        console.log("values",values);
    }
});
    return (
      <React.Fragment>
        <section className="section " id="contact">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="お問い合わせ"
              description="Toruneの導入に関するご質問や、イベントへの活用方法についてのご相談など、お気軽にお問い合わせください。"
            />

            <Row>
              <Col lg="4">
                <div className="mt-4 pt-4">
                  <p className="mt-4">
                    <span className="h5">所在地:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      〒150-0002<br />東京都渋谷区渋谷2-19-15<br />宮益坂ビルディング609
                    </span>
                  </p>
                  <p className="mt-4">
                    <span className="h5">お問い合わせ先:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      Email: contact@transformnavi.jp<br />
                    </span>
                  </p>
                  <p className="mt-4">
                    <span className="h5">営業時間:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      平日 10:00〜18:00
                    </span>
                  </p>
                </div>
              </Col>
              <Col lg="8">
                <div className="custom-form mt-4 pt-4">
                <p id="error-msg"></p>
                  <div id="message"></div>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                  }}>
                    <Row>
                      <Col lg="6 mt-2">
                      <Input
                          name="name"
                          className=""
                          placeholder="お名前 *"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.name || ""}
                          invalid={
                              validation.touched.name && validation.errors.name ? true : false
                          }
                      />
                      {validation.touched.name && validation.errors.name ? (
                          <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                      ) : null}
                      </Col>
                      <Col lg="6 mt-2">
                      <Input
                            name="email"
                            className=""
                            placeholder="メールアドレス *"
                            type="email"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email || ""}
                            invalid={
                                validation.touched.email && validation.errors.email ? true : false
                            }
                        />
                        {validation.touched.email && validation.errors.email ? (
                            <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12 mt-2">
                      <Input
                            name="subject"
                            className=""
                            placeholder="件名"
                            type="text"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.subject || ""}
                            invalid={
                                validation.touched.subject && validation.errors.subject ? true : false
                            }
                        />
                        {validation.touched.subject && validation.errors.subject ? (
                            <FormFeedback type="invalid">{validation.errors.subject}</FormFeedback>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12 mt-2">
                        <div className="form-group">
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="お問い合わせ内容"
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12" className="text-end">
                        <Button className="submitBnt btn btn-primary">
                          送信する
                        </Button>
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}

export default ContactUs;