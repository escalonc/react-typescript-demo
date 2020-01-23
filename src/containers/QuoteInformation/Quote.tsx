import React, { Component } from "react";
import ProcessorInformation from "./components/ProcessorInformation";
import PersonalInformation from "./components/PersonalInformation";
import StorageInformation from "./components/StorageInformation";
import PreInstalledSoftware from "./components/PreInstalledSoftware";
import Form, { FormComponentProps } from "antd/lib/form/Form";
import { Row, Col, Card, Button } from "antd";
import { QuoteValue } from "./models";
import QuoteService from "./quoteService";

export interface QuoteProps extends FormComponentProps {}

export interface QuoteState {
  total: number;
  quoteValues: QuoteValue[];
  customerName: string;
  customerLastName: string;
  email: string;
}

class Quote extends Component<QuoteProps, QuoteState> {
  private readonly service: QuoteService = new QuoteService();

  state: QuoteState = {
    quoteValues: [],
    total: 900,
    customerName: "",
    customerLastName: "",
    email: ""
  };

  setQuoteValue = (quoteValue: QuoteValue) => {
    let quoteValues: QuoteValue[] = [...this.state.quoteValues];
    const quoteIndex = quoteValues.findIndex(
      value => value.name === quoteValue.name
    );
    if (quoteIndex !== -1) {
      quoteValues.push(quoteValue);
    } else {
      quoteValues[quoteIndex] = quoteValue;
    }

    const total = this.service.sum(quoteValues);

    this.setState({ quoteValues, total });
  };

  setCustomerName = (customerName: string) => {
    this.setState({ customerName });
  };

  setCustomerLastName = (customerLastName: string) => {
    this.setState({ customerLastName });
  };

  setEmail = (email: string) => {
    this.setState({ email });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { form } = this.props;
    const { total } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <div>
              <PersonalInformation
                form={form}
                setCustomerLastName={this.setCustomerLastName}
                setCustomerName={this.setCustomerName}
                setEmail={this.setEmail}
              />
              <ProcessorInformation form={form} />
              <StorageInformation form={form} />
              <PreInstalledSoftware form={form} />
            </div>
          </Col>
          <Col span={12}>
            <div className="quote-section center">
              <h2 className="quote-section-title">Your total:</h2>
              <Card>
                <h2>
                  Taxes included:{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(total!)}
                </h2>
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
    );
  }
}

export default Form.create({ name: "quote" })(Quote);
