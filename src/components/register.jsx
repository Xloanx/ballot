import React, { Component } from 'react';
import { getProjects } from "../services/fakeProjectService";
import { getRoles } from "../services/fakeRoleService";
import Joi from "joi-browser";
import Form from "./common/form";

class Register extends Form {
    state = {
        data: { userEmail: "", 
                userPassword: "",
                userPassword1: "",
                projectName: "",
            },
        errors: {},
        roles: [],
        projects: []
     }

     componentDidMount() {
        const projects = getProjects();
        const roles = getRoles();
        this.setState({ projects, roles });
     }

    schema = {
        userEmail : Joi.string()
        .required()
        .email({ minDomainSegments: 2 })
        .label('Email'),

        password : Joi.string()
        .min(8)
        .required()
        .label('Password'),

        projectName : Joi.string()
        .required()
        .label('Project')
    }
    render() {
        const { projects, roles } = this.state;
        return ( 
            <main className="form-signin">
                <form onSubmit={this.handleSubmit}>
                    <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Join our Space!</h1>

                    {this.renderInput( "userEmail", "Email Address", "email")}
                    {this.renderInput( 'userPassword', "Password", "password")}
                    {this.renderInput( 'userPassword1', "Password (Again)", "password")}
                    {this.renderInput( "firstName", "First Name")}
                    {this.renderInput( "lastName", "Last Name")}
                    {this.renderSelect("role", "Role", roles )}
                    {this.renderDataList("projectName", "Name of Project", projects)}
                    {this.renderTextArea("projectDescription", "Describe Project in Brief", "2")}
                    {this.renderButton(" Continue")}
                </form>
                </main>
         );
    }
}
 
export default Register;