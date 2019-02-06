import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from 'components/header/Header';
import Student from 'components/student';
import Notification from 'components/shared/Notification';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <div>
              <Header />
            </div>
            <div>
              <button className="btn btn-success mb-4">
                <Link style={{ color: 'white' }} to="/add">Add New Student</Link>
              </button>
            </div>
            <Student />
          </div>
        </BrowserRouter >
        <Notification toasts={this.props.toasts} />
      </>
    );
  }
}

const mapStateToProps = state => ({ toasts: state.toasts })

export default connect(mapStateToProps)(App);