var React = require('react');
var Link = require('react-router-dom').Link;
var ContactForm = require('../ContactForm');

function ContentWidget(props) {
    return (
        <Link className={'content-widget'} style={{textDecoration:"none"}} to={props.link} target={props.target && props.target}>
            <div className='img-container'>
                <div className="imger" style={{backgroundImage: "url(" + props.background + ")"}}/>
            </div>
                <p> {props.text} </p>
                <h1> {props.title} </h1>
        </Link>
    );
}


class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contact: false
    };

      this.handleToggleContact = this.handleToggleContact.bind(this);
    }

    handleToggleContact() {
      this.setState({contact: !this.state.contact});
    }

  render () {
    return (
        <div className='wrapper' style={{background:"white"}}>


            <div className='news-wrapper' style={{backgroundImage: "url('http://voidzy.com/img/laptop2.jpg')", minHeight: "900px"}}>

                <div className='featured-widget' style={{color: "white", marginTop: "124px"}}>
                    <h1> Välkommen till min sida! </h1>
                    <p> Vill du kontakta mig?</p>
                    <button
                         className='featured-button'
                         onClick={this.handleToggleContact}>
                         {!this.state.contact ? <div>Kontakta mig</div> : <div>Kontakta mig [X]</div>}
                     </button>

                     {this.state.contact && <ContactForm />}

                </div>

                {!this.state.contact && <p className='arrow down'/>}


                </div>

            <div className='content wrapper'>
                <ContentWidget background={"http://www.voidzy.com/img/github.png"} text={"Kika gärna på min Github"} title={"Github"} link="https://github.com/Nicklas766" target="_blank" />
                <ContentWidget background={"http://www.voidzy.com/img/me.png"} text={"Läs gärna mer om mig"} title={"Om mig"} link={"/about"}/>
                <ContentWidget background={"http://www.voidzy.com/img/bth.png"} text={"Se vad jag studerar"} title={"Skola"} link={"https://www.bth.se/distansutbildningar/webbprogrammering/"} target={"_blank"}/>
            </div>


            <div className='featured-widget' style={{color:"#27A87E"}}>
                <h1> Eller du kanske vill se mina projekt? </h1>
                <Link className='featured-button' style={{background:"#27A87E"}} to='/projects'>
                    Se projekt
                </Link>
            </div>

            <div className='featured-widget' style={{color:'#27A87E', borderTop: '0.1px solid silver'}}>
                <h1> Eller ... </h1>
                <p> så kanske du vill veta hur denna sida är skapad? </p>
                <Link className='featured-button' style={{background:"#27A87E"}} to='/aboutpage'>
                    Ja visa mig hur!
                </Link>

            </div>
        </div>
    )
  }
}


module.exports = Home;
