//TODO you're not doing this right,
// follow http://socket.io/get-started/chat/
// more closely
// then figure out how to send a signal to the page
const
    R = require('ramda'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    socket = io()

socket.on('refresh page', () => console.log('reloading'))

ReactDOM.render(
    <div>
        <h1>Banana Train</h1>
        <p>A productivity tool for banana brains</p>
    </div>,
    document.getElementById('banana-train')
)
