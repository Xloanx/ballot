import React, { Component } from "react";
import Joi from "joi-browser";
import FormHeader from "./formHeader";
import Input from "./input";
import SubmitButton from "./submitButton";
import Select from "./select";
import RememberMeCheckBox from "./rememberMeCheckBox";
import FileInput from "./fileInput";
import TextArea from "./textArea";
import DataList from "./dataList";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const newErrors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];

    const submittedData = { ...this.state.data };
    submittedData[input.name] = input.value;
    this.setState({ data: submittedData, errors: newErrors });
  };

  renderFormHeader(label) {
    return <FormHeader label={label} />;
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderFileInput(name, label, type){
    const { data, errors } = this.state;
    return (
      <FileInput
        name={name}
        type={type}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextArea(name, label, row, column){
    const {data, errors} = this.state;
    return (
      <TextArea 
      row={row}
      column={column}
      name={name}
      label={label}
      value={data[name]}
      onChange={this.handleChange}
      error={errors[name]}
      />
    )
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        label={label}
        name={name}
        value={data[name]}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderDataList(name, label, options){
    const {data, errors} = this.state;
    return(
      <DataList 
        label={label}
        name={name}
        value={data[name]}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderRememberMeCheckBox() {
    return <RememberMeCheckBox />;
  }

  renderButton(label) {
    return <SubmitButton label={label} onDisabled={this.validate()} />;
  }
}

export default Form;
