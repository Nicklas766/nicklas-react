var React = require('react');
var Link = require('react-router-dom').Link;
var ClickShow = require('../ClickShow');

class AboutPage extends React.Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

  render () {
    return (
      <div className='wrapper' style={{background:"#F0F0F0", minHeight: "900px"}}>


      <div className={"featured-widget"} style={{color:"#009CE6", marginBottom: "24px"}}>
            <h1> Hur är denna hemsida skapad? </h1>
        </div>
        <div className='wrapper' style={{margin:"0 auto 250px", width:"50%", color:"#009CE6"}}>
        <div style={{background: "lightblue", padding: "15px", width: "100%"}}>
              <h1> Om sidan</h1>
              <p> Hemsidan är skapad med React och använder min egna RESTful-server som jag har skapat med PHP. </p>
              <p> Sedan för stilen så använder jag mitt egna "CSS-framework". </p>

              <Link to={"https://github.com/Nicklas766/nicklas-react"} target={"_blank"}>
                  Websites code
              </Link>

              <h2 style={{borderBottom: "2px solid", marginTop:"24px"}}>Jag använder följande</h2>

              <li><Link to={"https://facebook.github.io/react/"} target={"_blank"}>
                  React
              </Link></li>

              <li><Link to={"https://github.com/Nicklas766/MySQL-JSONify"} target={"_blank"}>
                  MySQL-JSONify
              </Link></li>

             <li><Link to={"https://github.com/Nicklas766/front-end-framwork"} target={"_blank"}>
                  CSS-framework
              </Link></li>
     </div>

          </div>

      </div>
    )
  }
}


module.exports = AboutPage;
