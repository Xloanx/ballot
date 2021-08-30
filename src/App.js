import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ContestantsForm from './components/contestantsForm';
import ContestantsDetails from './components/contestantsDetails';
import Booth from './components/booth';
import Footer from './components/footer';
import Welcome from './components/welcome';
import NotFound from "./components/notFound";
import Login from "./components/login";
import Register from "./components/register";

class App extends Component {
    state = {}
    render() {
        return ( < main className = 'container-fluid' >
            <
            Navbar / >
            <
            Switch >
            <
            Route path = "/register"
            component = { Register }
            /> <
            Route path = "/login"
            component = { Login }
            /> <
            Route path = "/contestantsForm/:contestantId"
            component = { ContestantsForm }
            />  <
            Route path = "/notFound"
            exact component = { NotFound }
            />  <
            Route path = "/contestantsDetails/:contestantId"
            component = { ContestantsDetails }
            />  <
            Route path = "/booth"
            render = {
                props => < Booth {...props }
                />} / >
                <
                Route path = "/"
                component = { Welcome }
                />  <
                Redirect to = "/notFound" / >
                <
                /Switch>  <
                Footer / >
                <
                /main>
            );
        }
    }

    export default App;