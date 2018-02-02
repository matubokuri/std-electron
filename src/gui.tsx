/**
 * Entry Point
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'

localStorage.debug = 'none'

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('root') as HTMLElement
)
