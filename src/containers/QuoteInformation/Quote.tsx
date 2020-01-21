import React, { Component } from "react";
import ProcessorInformation from "./components/ProcessorInformation";
import PersonalInformation from "./components/PersonalInformation";
import StorageInformation from "./components/StorageInformation";
import PreInstalledSoftware from "./components/PreInstalledSoftware";
import { WrappedFormUtils } from "antd/lib/form/Form";

export interface QuoteProps {
  form: WrappedFormUtils;
}

class Quote extends Component<QuoteProps, {}> {
  render() {
    const { form } = this.props;
    return (
      <div>
        <PersonalInformation form={form} />
        <ProcessorInformation form={form} />
        <StorageInformation form={form} />
        <PreInstalledSoftware form={form} />
      </div>
    );
  }
}

export default Quote;
