import React, { Component } from "react";
import { Form, Radio, Card } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";

interface StorageInformationProps {
  form: WrappedFormUtils;
}

class StorageInformation extends Component<StorageInformationProps, {}> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="quote-section center">
        <h2 className="quote-section-title">Storage:</h2>
        <Card>
          <Form.Item>
            {getFieldDecorator("storage", { initialValue: "a" })(
              <Radio.Group buttonStyle="solid">
                <Radio.Button value="a">256 GB</Radio.Button>
                <Radio.Button value="b">512 GB</Radio.Button>
                <Radio.Button value="c">1 TB</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
        </Card>
      </div>
    );
  }
}

export default StorageInformation;
