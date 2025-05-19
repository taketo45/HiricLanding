import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, FormFeedback, Form, Input } from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Section Title
import SectionTitle from "../common/section-title";

// ランダムなCSRFトークンを生成する関数
const generateCSRFToken = () => {
  return Array(64)
    .fill(0)
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
};

const ContactUs = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [csrfToken, setCsrfToken] = useState('');

  // コンポーネントマウント時にCSRFトークンを生成
  useEffect(() => {
    setCsrfToken(generateCSRFToken());
  }, []);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
    },
    validationSchema: Yup.object({
        name: Yup.string()
          .max(50, "お名前は50文字以内で入力してください")
          .required("お名前を入力してください"),
        email: Yup.string()
          .email("有効なメールアドレスを入力してください")
          .required("メールアドレスを入力してください"),
        subject: Yup.string()
          .required("件名を入力してください"),
        message: Yup.string()
          .max(1000, "お問い合わせ内容は1000文字以内で入力してください")
          .required("お問い合わせ内容を入力してください"),
    }),    onSubmit: (values, { resetForm }) => {
        // フォームデータの作成
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('subject', values.subject);
        formData.append('message', values.message);
        formData.append('csrf_token', csrfToken);
        
        // PHPスクリプトにPOSTリクエストを送信
        fetch('https://transformnavi.jp/requestform.php', {
          method: 'POST',
          body: formData,
        })
        .then(response => {
          if (response.ok) {
            setSubmitStatus('success');
            resetForm();
          } else {
            setSubmitStatus('error');
          }
        })
        .catch(error => {
          console.error('送信エラー:', error);
          setSubmitStatus('error');
        });
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
                  </p>                  <p className="mt-4">
                    <span className="h5">お問い合わせ先:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      Email: <a href="mailto:contact@transformnavi.jp">contact@transformnavi.jp</a><br />
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
                <div className="custom-form mt-4 pt-4">                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger">
                    送信中にエラーが発生しました。お手数ですが、時間をおいて再度お試しいただくか、直接メールでお問い合わせください。
                  </div>
                )}
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
                    </Row>                    <Row>
                      <Col lg="12 mt-2">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            rows="4"
                            className="form-control"
                            placeholder="お問い合わせ内容 *"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.message || ""}
                            invalid={
                              validation.touched.message && validation.errors.message ? true : false
                            }
                          ></textarea>
                          {validation.touched.message && validation.errors.message ? (
                            <div className="text-danger">{validation.errors.message}</div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>                    <Row>
                      <Col lg="12" className="text-end">
                        <Button type="submit" className="submitBnt btn btn-primary">
                          送信する
                        </Button>
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