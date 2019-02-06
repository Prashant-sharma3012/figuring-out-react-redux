import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { removeToast } from 'actions/toasts';

class Notification extends Component {

  remove = toast => this.props.removeToast(toast);

  renderNotification = () => {
    return (
      this.props.toasts.map(toast => (
        <div className={`d-flex flex-row flex-grow-1 card bg-${toast.type}`}>
          <span className="text-white flex-grow-1 m-4">
            {toast.message}
          </span>
          <button className={`btn btn-${toast.type}`} onClick={() => this.remove(toast)}>x</button>
        </div>
      ))
    );
  }

  render() {
    return ReactDOM.createPortal(
      this.renderNotification(),
      document.getElementById('notification')
    );
  }
}

export default connect(null, { removeToast })(Notification);