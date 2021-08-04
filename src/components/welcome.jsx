import React from 'react';

const Welcome = () => {
    return ( 
        <React.Fragment>
            <main className='container-fluid'>
                <h1>Welcome to Ballot App</h1>
                <p className="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.</p>

                <div className="mb-5">
                <a href="/docs/5.0/examples/" className="btn btn-primary btn-lg px-4">Download examples</a>
                </div>

                <hr className="col-3 col-md-2 mb-5" />

                <div className="row g-5">
                    <div className="col-md-6">
                        <h2>Starter projects</h2>
                        <p>Ready to use the Ballot App?</p>
                        <ul className="icon-list">
                        <li><a href="https://github.com/twbs/bootstrap-npm-starter">Login to Access your account</a></li> or
                        <li><a href="https://github.com/twbs/bootstrap-npm-starter">Register to Create an Account</a></li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h2>Guides</h2>
                        <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
                        <ul className="icon-list">
                        <li><a href="/docs/5.0/getting-started/introduction/">Bootstrap quick start guide</a></li>
                        <li><a href="/docs/5.0/getting-started/webpack/">Bootstrap Webpack guide</a></li>
                        <li><a href="/docs/5.0/getting-started/parcel/">Bootstrap Parcel guide</a></li>
                        <li><a href="/docs/5.0/getting-started/build-tools/">Contributing to Bootstrap</a></li>
                        </ul>
                    </div>
                </div>
            </main>
        </React.Fragment>
     );
}
 
export default Welcome;