var React = require('react');
var Link = require('react-router-dom').Link;

class Footer extends React.Component {

  render () {
    return (

        <footer className="footer-wrapper">


            <div className="footer-widget">
                <h1><a style={{color:"white"}} href="mailto:nicklas766@live.se"> © Nicklas Envall </a></h1>
            </div>



        </footer>
    )
  }
}


module.exports = Footer;
