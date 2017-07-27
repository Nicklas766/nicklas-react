var React = require('react');

class Loading extends React.Component {
  render () {
    ...
  }
}
Loading.defaultProps = {
  text: 'Loading'
}

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state =  {
      email: '',
      password: ''
    }
  }
  render () {
    ...
  }
}


class FriendsList extends React.Component {
  componentDidMount () {
    return axios.get(this.props.url).then(this.props.callback)
  }
  render () {
    ...
  }
}

class FriendsList extends React.Component {
  componentDidMount () {
    ref.on('value', function (snapshot) {
      this.setState(function () {
        return {
          friends: snapshot.val()
        }
      })
    }.bind(this)
  }
  render () {
    ...
  }
}
