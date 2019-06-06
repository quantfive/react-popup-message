/***
 * Message component to show a message for success, error, or a loader
 * @patr
 */

import React, { Component } from "react";

// NPM Modules
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Fontawesome config
import './FontAwesome';

const SHOW_TIMEOUT = 2000;

class Message extends Component {
  eventListen = () => {
    this.props.setShow(false);
    document.removeEventListener("click", this.eventListen, true);
    document.removeEventListener("touchstart", this.eventListen, true);
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.show &&
      this.props.show !== nextProps.show
    ) {
      if (nextProps.clickoff) {
        document.addEventListener("touchstart", this.eventListen, true);
        document.addEventListener("click", this.eventListen, true);
      } else if (!nextProps.load) {
        this.popupMessageTimeout = setTimeout(() => {
          this.props.setShow(false);
        }, this.props.showTimeout || SHOW_TIMEOUT);
      }
    }
  }

  render() {
    let { show, error, load, message } = this.props;
    return (
      <div className={css(styles.popupMessage, !show && styles.hide)}>
        {load ? (
          this.props.spinnerIcon
            ? this.props.spinnerIcon
            : <FontAwesomeIcon
                icon={this.props.fontawesomeSpinner ? this.props.fontawesomeSpinner : ["fas", "circle-notch"]}
                className={css(styles.check)}
                size="3x"
                spin
                color="#fff"
              />
        ) : error ? (
          this.props.errorIcon
            ? this.props.errorIcon
            : <FontAwesomeIcon
                icon={this.props.fontawesomeError ? this.props.fontawesomeError : ["fas", "times"]}
                className={css(styles.check)}
                size="3x"
                color="#fff"
              />
        ) : (
          this.props.successIcon
            ? this.props.successIcon
            : <FontAwesomeIcon
                icon={this.props.fontawesomeSuccess ? this.props.fontawesomeSuccess : ["fas", "check"]}
                className={css(styles.check)}
                size="3x"
                color="#fff"
              />
        )}
        {!load && (
          <div className={css(styles.message)}>{message}</div>
        )}
      </div>
    );
  }
}

var styles = StyleSheet.create({
  popupMessage: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0, 0, 0, .8)",
    padding: "16px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 9999999,
    whiteSpace: "pre-wrap"
  },
  hide: {
    display: "none"
  },
  message: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "300",
    textAlign: "center"
  }
});

export default Message;
