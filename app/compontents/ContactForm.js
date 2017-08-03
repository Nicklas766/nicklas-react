var React = require('react');
var axios = require('axios');

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        text: 'Type your message here'
    };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name);
      alert('An e-mail was submitted: ' + this.state.email);
      alert('A text was submitted: ' + this.state.text);
      axios.post('mailto:Nicklas766@live.se', {
        name: "Nicklas",
        mail: "nicklas766@live.se",
        comments: "mitt meddelande"

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      event.preventDefault();
    }

  render () {
    return (
        <div className="login-widget">
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
