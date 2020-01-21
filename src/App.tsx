import React from "react";
import "./App.css";
import Quote from "./containers/QuoteInformation/Quote";
import "antd/dist/antd.css";
import { Col, Row, Card, Form, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";

interface AppProps extends FormComponentProps {}

const App = (props: AppProps) => {
  const { form } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <div className="main">
      <header>
        <h1>Buy a new Macbook Pro</h1>
        <p>
          <span>16-inch Retina display with True Tone</span>
          <span>Four Thunderbolt 3 ports</span>
          <span>Touch Bar and Touch ID</span>
          <span>Backlit Keyboard - US English</span>
        </p>
      </header>
      <Form onSubmit={handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Quote form={form} />
          </Col>
          <Col span={12}>
            <div className="quote-section center">
              <h2 className="quote-section-title">Your total:</h2>
              <Card>
                <h2>Taxes included: 1200$</h2>
              </Card>
            </div>
            <div className="image center">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=843&fmt=jpeg&qlt=95&.v=1572825197207"
                alt="Macbook Pro"
              />
            </div>
            <div className="center">
              <Form.Item style={{ marginTop: "2rem" }}>
                <Button
                  shape="round"
                  type="primary"
                  htmlType="submit"
                  size="large"
                >
                  You already have it, Wanna save it?
                </Button>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Form.create({ name: "app" })(App);
