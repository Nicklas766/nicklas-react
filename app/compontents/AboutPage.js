var React = require('react');
var Link = require('react-router-dom').Link;
var ContactForm = require('./ContactForm');

class AboutPage extends React.Component {

  render () {
    return (
      <div className='wrapper' style={{background:"#27A87E"}}>
      <ContactForm />

      <div className='featured-widget' style={{color:"white"}}>
        <h1> Om sidan</h1>
        <p> Hemsidan är skapad med React och använder min egna RESTful-server som jag har skapat med PHP. </p>
        <p> Sedan för stilen så använder jag mitt egna "CSS-framework". </p>

        <h4>Hemsidans kod,</h4>
        <li><a href="https://github.com/Nicklas766/nicklas-react">Hittar du här</a></li>

        <h4>Använder följande, </h4>
        <li><a href="https://facebook.github.io/react/">React</a></li>
        <li><a href="https://github.com/Nicklas766/MySQL-JSONify">MySQL-JSONify</a></li>
        <li><a href="https://github.com/Nicklas766/front-end-framwork">CSS-framework</a></li>

      </div>

      </div>
    )
  }
}


module.exports = AboutPage;
