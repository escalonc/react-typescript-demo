import React, { Component } from "react";
import { Form, Radio, Card } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { QuoteCategory } from "../models";
import { RadioChangeEvent } from "antd/lib/radio";

//implement props
//implement options

class StorageInformation extends Component<StorageInformationProps, {}> {
  storageHandler = (event: RadioChangeEvent) => {
    this.props.setQuoteValue({ name: "storage", option: event.target.value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="quote-section center">
        <h2 className="quote-section-title">Storage:</h2>
        <Card>
          <Form.Item>
            {getFieldDecorator("storage", {
              initialValue: "a"
            })(
              <Radio.Group buttonStyle="solid" onChange={this.storageHandler}>
                <Radio.Button value={"a"}>256 GB</Radio.Button>
                <Radio.Button value={"a"}>512 GB</Radio.Button>
                <Radio.Button value={"a"}>1 TB</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
        </Card>
      </div>
    );
  }
}

export default StorageInformation;
