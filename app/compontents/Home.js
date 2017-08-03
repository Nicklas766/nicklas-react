var React = require('react');
var Link = require('react-router-dom').Link;

function ContentWidget(props) {
    return (
        <div className='content-widget'>
            <div className='img-container'>
                <div className="imger" style={{backgroundImage: "url(" + props.background + ")"}}/>
            </div>
                <p> {props.text} </p>
                <h1> {props.title} </h1>
        </div>
    );
}


class Home extends React.Component {

  render () {

    return (
        <div className='wrapper' style={{background:"white"}}>

            <div className='news-wrapper' style={{backgroundImage: "url('app/img/coffee.jpg')", height:700}}>
                <div className='featured-widget'>
                    <h1> Välkommen till min sida! </h1>
                    <p> Vill du kontakta mig?</p>
                    <button
                         className='featured-button'
                         type='submit'>
                         Kontakta mig
                     </button>
                </div>

                </div>

            <div className='content wrapper'>
                <ContentWidget background={"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"} text={"Kika gärna på min Github"} title={"Github"} />
                <ContentWidget background={"https://d30y9cdsu7xlg0.cloudfront.net/png/45447-200.png"} text={"Läs gärna mer om mig"} title={"Om mig"} />
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
