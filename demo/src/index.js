import React, {Component} from 'react'
import {render} from 'react-dom'
import { StyleSheet, css } from "aphrodite";

import Message from '../../src'

class Demo extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.top)}>
          <Message 
            messageContainerStyle={css(styles.messageContainerStyle)}
            load={true}
            show={true} 
          />
        </div>
        <div className={css(styles.top)}>
          <Message 
            show={true}
            message={'Success!'}
            messageContainerStyle={css(styles.messageContainerStyle)}
          />
        </div>
        <div className={css(styles.top)}>
          <Message 
            error={true}
            show={true} 
            message={'There was an error!'}
            messageContainerStyle={css(styles.messageContainerStyle)}
          />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    minHeight: 600,
  },
  top: {
    position: 'relative',
    flex: 1,
    height: 600,
  },
  messageContainerStyle: {
    position: 'absolute',
  }
})

render(<Demo/>, document.querySelector('#demo'))
