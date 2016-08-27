  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>')

const
    R = require('ramda'),
    React = require('react'),
    ReactDOM = require('react-dom')

ReactDOM.render(
    <div>
        <h1>Banana Train</h1>
        <p>A productivity tool for banana potatoes</p>
    </div>,
    document.getElementById('banana-train')
)
