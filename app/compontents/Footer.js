var React = require('react');
var Link = require('react-router-dom').Link;

class Footer extends React.Component {

  render () {
    return (

        <footer className="footer-wrapper">

            <div className="footer-widget">
                <h4> Kontakta mig </h4>
                <h6> E-post: Nicklas766@live.se </h6>
            </div>

            <div className="footer-widget">
                <h2> © Nicklas Envall </h2>
                <h6> License </h6>

            </div>

            <div className="footer-widget">
                <h4> Länkar </h4>
                <h6> E-post: Nicklas766@live.se </h6>
            </div>
        </footer>
    )
  }
}


module.exports = Footer;
