import React, { Component } from "react";
import { Checkbox, Card, Row, Col } from "antd";
import options from "../../../data/programs.json";
import { WrappedFormUtils } from "antd/lib/form/Form";

interface PreInstalledSoftwareProps {
  form: WrappedFormUtils;
}

export default class PreInstalledSoftware extends Component<
  PreInstalledSoftwareProps,
  {}
> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="quote-section">
        <h2 className="quote-section-title">Pre-Installed Software:</h2>
        <Card>
          {getFieldDecorator("programs", { initialValue: ["a"] })(
            <Checkbox.Group>
              <Row>
                {options.map(({ name, option }) => (
                  <Col span={8} key={name}>
                    <Checkbox value={option}>{name}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          )}
        </Card>
      </div>
    );
  }
}
