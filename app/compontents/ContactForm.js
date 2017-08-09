var React = require('react');
var axios = require('axios');

function Popup(props) {
    return (
        <div className={"popup"} style={{background:props.background}}>
            <p>{props.text}</p>
            <p className={"popclose"} onClick={props.onSelect}>X</p>
        </div>
    );
}

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        text: 'Type your message here',
        popup: false
    };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePopup = this.handlePopup.bind(this);
    }

    handleInputChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    handlePopup() {
      this.setState({popup: false});
    }

    handleSubmit(event) {

      var encodedURI = window.encodeURI('http://nicklasenvall.se/api.php/contact');
      axios.post(encodedURI, `name=${this.state.name}&email=${this.state.email}&message=${this.state.text}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({
        name: '',
        email: '',
        text: 'Type your message here',
        popup: true
    });
      event.preventDefault();
    }

  render () {
    return (
        <div className="login-widget">

        {this.state.popup && <Popup text={"Tack för ditt meddelande!"} background={"green"} onSelect={this.handlePopup} />}

        <form onSubmit={this.handleSubmit}>
          <input
            name={"name"}
            type="text"
            value={this.state.name}
            placeholder={"Your name"}
            onChange={this.handleInputChange} />

          <input
            name={"email"}
            type="text"
            value={this.state.email}
            placeholder={"Your e-mail"}
            onChange={this.handleInputChange} />

          <textarea
            name={"text"}
            value={this.state.text}
            onChange={this.handleInputChange} />

          <button type="submit" value="Submit">Skicka</button>
        </form>
      </div>
    )
  }
}


module.exports = ContactForm;
