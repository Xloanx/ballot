import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from './common/form';
import { Link } from 'react-router-dom';

class Login extends Form {
    state = { 
        data: { userEmail: "", userPassword: "", projectName:""},
        errors: {}
     }

     schema = {
        userEmail : Joi.string()
        .required()
        .email({ minDomainSegments: 2 })
        .label('Email'),

        password : Joi.string()
        .min(8)
        .required()
        .label('Password')
    }


    render() {
        return ( 
            <main className="form-signin">
                <form onSubmit={this.handleSubmit}>
                    <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    {this.renderInput( "userEmail", "Email Address", "email")}
                    {this.renderInput( 'userPassword', "Password", "password")}
                    <div className=" mb-3">
                    <Link> Forgot Password? </Link>
                    </div>

                    {this.renderButton("Continue")}
                </form>
                </main>
         );
    }
}
 
export default Login;