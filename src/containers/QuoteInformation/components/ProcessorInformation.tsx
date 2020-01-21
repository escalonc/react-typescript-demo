import React, { Component } from "react";
import { Card, Form, Radio } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";

interface ProcessorInformationProps {
  form: WrappedFormUtils;
}

export default class ProcessorInformation extends Component<
  ProcessorInformationProps,
  {}
> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="quote-section center">
        <h2 className="quote-section-title">Processor:</h2>
        <Card>
          <Form.Item>
            {getFieldDecorator("processor", { initialValue: "a" })(
              <Radio.Group buttonStyle="solid">
                <Radio.Button value="a">Core i5</Radio.Button>
                <Radio.Button value="b">Core i7</Radio.Button>
                <Radio.Button value="c">Core i9</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
        </Card>
      </div>
    );
  }
}
