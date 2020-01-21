import React, { Component } from "react";
import { Card, Form, Input, Row, Col } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";

interface PersonalInformationProps {
  form: WrappedFormUtils;
}

export default class PersonalInformation extends Component<
  PersonalInformationProps,
  {}
> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="quote-section">
        <h2 className="quote-section-title">Personal information:</h2>
        <Card>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="First Name">
                {getFieldDecorator("firstName", {
                  rules: [
                    { required: true, message: "Please input your first name!" }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Last Name">
                {getFieldDecorator("lastName", {
                  rules: [
                    { required: true, message: "Please input your last name!" }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item label="Email">
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Please input your email!" }]
              })(<Input />)}
            </Form.Item>
          </Row>
        </Card>
      </div>
    );
  }
}
