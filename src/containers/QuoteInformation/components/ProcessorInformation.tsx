import React, { Component } from "react";
import { Card, Form, Radio } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { RadioChangeEvent } from "antd/lib/radio";
import { QuoteCategory } from "../models";

//implement ProcessorInformationProps
//implement ProcessorOptions

class ProcessorInformation extends Component<ProcessorInformationProps, {}> {
  processorHandler = (event: RadioChangeEvent) => {
    console.log(event.target.value);
    this.props.setQuoteValue({
      name: "processors",
      option: event.target.value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="quote-section center">
        <h2 className="quote-section-title">Processor:</h2>
        <Card>
          <Form.Item>
            {getFieldDecorator("processor", {
              initialValue: ProcessorOptions.i5
            })(
              <Radio.Group buttonStyle="solid" onChange={this.processorHandler}>
                <Radio.Button value={ProcessorOptions.i5}>Core i5</Radio.Button>
                <Radio.Button value={ProcessorOptions.i7}>Core i7</Radio.Button>
                <Radio.Button value={ProcessorOptions.i9}>Core i9</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
        </Card>
      </div>
    );
  }
}

export default ProcessorInformation;
