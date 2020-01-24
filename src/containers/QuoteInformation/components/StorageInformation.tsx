import React, { Component } from "react";
import { Form, Radio, Card } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { QuoteCategory } from "../models";
import { RadioChangeEvent } from "antd/lib/radio";

interface StorageInformationProps {
  form: WrappedFormUtils;
  setQuoteValue(quoteCategory: QuoteCategory): void;
}

enum StorageOptions {
  Storage256 = "storage-256",
  Storage512 = "storage-512",
  Storage1024 = "storage-1024"
}

class StorageInformation extends Component<StorageInformationProps, {}> {
  storageHandler = (event: RadioChangeEvent) => {
    this.props.setQuoteValue({ name: "storage", option: event.target.value });
  };

  // componentDidMount() {
  //   this.props.setQuoteValue({
  //     name: "storage",
  //     option: StorageOptions.Storage256
  //   });
  // }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="quote-section center">
        <h2 className="quote-section-title">Storage:</h2>
        <Card>
          <Form.Item>
            {getFieldDecorator("storage", {
              initialValue: StorageOptions.Storage256
            })(
              <Radio.Group buttonStyle="solid" onChange={this.storageHandler}>
                <Radio.Button value={StorageOptions.Storage256}>
                  256 GB
                </Radio.Button>
                <Radio.Button value={StorageOptions.Storage512}>
                  512 GB
                </Radio.Button>
                <Radio.Button value={StorageOptions.Storage1024}>
                  1 TB
                </Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
        </Card>
      </div>
    );
  }
}

export default StorageInformation;
