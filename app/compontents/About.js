var React = require('react');
var PropTypes = require('prop-types');

function Me(props) {
  return (
    <div className='info-widget' onClick={props.onClick}>
        <h2>{props.title}</h2>
        {props.children}
    </div>
  );
}

class About extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      clicked2: false,
      clicked3: false
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleToggleClick2 = this.handleToggleClick2.bind(this);
    this.handleToggleClick3 = this.handleToggleClick3.bind(this);
  }

  handleToggleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }
  handleToggleClick2() {
    this.setState({
      clicked2: !this.state.clicked2
    });
  }
  handleToggleClick3() {
    this.setState({
      clicked3: !this.state.clicked3
    });
  }

  render () {

    return (
        <div className='wrapper' style={{background:"#27A87E"}}>

        <div className='featured-widget' style={{marginBottom:0, color:"white"}}>
          <h1> Hej! Jag heter Nicklas, tack för att du besöker sidan.</h1>
          <p> Jag har skapat några widgets som du kan snabbt kika igenom om du vill </p>
        </div>

        {!this.state.clicked ?
          <Me title={"Om mig +"} onClick={this.handleToggleClick} />
         :
          <Me title={"Om mig -"} onClick={this.handleToggleClick}>
          <p> Jag har bott i Stockholm hela mitt liv. Jag tror att folk uppfattar mig som trevlig, rolig och snäll.
           Det är det man strävar att folk ska tycka iallafall. Favoritfilmen måste vara Sagan om ringen, såklart. </p>
           <p> Jag har några intressen, mitt största just nu är programmering. </p>
          </Me>
        }

        {!this.state.clicked2 ?
          <Me title={"Utbildning +"} onClick={this.handleToggleClick2} />
         :
          <Me title={"Utbildning -"} onClick={this.handleToggleClick2}>
          <p> Jag började studera webbprogrammering på Blekinge Tekniska Högskola, i augusti 2016.
          Jag har alltid haft ett tekniskt intresse, men när jag väl började utbildningen så insåg jag att
          webbprogrammering verkligen var något för mig. Jag studerar 100% på distans och jobbar 25%.</p>
          <p> Sedan jag startade utbildningen så startades verkligen en eld inombords, jag älskar programmering,
          jag vill alltid lära mig nya saker inom det och bli en bättre programmerare.  </p>
          </Me>
        }

        {!this.state.clicked3 ?
          <Me title={"Jobb +"} onClick={this.handleToggleClick3} />
         :
          <Me title={"Jobb -"} onClick={this.handleToggleClick3}>
          <p> Det är ett år kvar på utbildningen. Jag har arbetat i cirka 1 år och 7 månader för ett stort företag
          där jag dagligen har kontakt saker som angår e-handel. E-handel är något som jag tycker är riktigt intressant.
          Däremot är tjänsten inte relaterat till webbprogrammering.</p>
          </Me>
        }

      </div>
    )
  }
}


module.exports = About;
