var React = require('react');
var PropTypes = require('prop-types');
var ClickShow = require('../ClickShow');

class About extends React.Component {

  render () {

    return (
        <div className='wrapper' style={{background:"#F0F0F0", minHeight: "700px"}}>

        <div className='featured-widget' style={{marginBottom:0, color:"#009CE6"}}>
          <h1> Hej! Jag heter Nicklas, tack för att du besöker sidan.</h1>
          <p> Jag har skapat några widgets som du kan snabbt kika igenom om du vill </p>
        </div>

        <div className='wrapper' style={{margin:"0 auto 250px", width:"50%", color:"#009CE6"}}>
          <ClickShow title={"Om mig"}>
              <p> Jag har bott i Stockholm hela mitt liv. Jag tror att folk uppfattar mig som trevlig, rolig och snäll.
               Det är det man strävar att folk ska tycka iallafall. Favoritfilmen måste vara Sagan om ringen, såklart. </p>
               <p> Jag har några intressen, mitt största just nu är programmering. </p>
          </ClickShow>

          <ClickShow title={"Utbildning"}>
              <p> Jag började studera webbprogrammering på Blekinge Tekniska Högskola, i augusti 2016.
              Jag har alltid haft ett tekniskt intresse, men när jag väl började utbildningen så insåg jag att
              webbprogrammering verkligen var något för mig. Jag studerar 100% på distans och jobbar 25%.</p>
              <p> Sedan jag startade utbildningen så startades verkligen en eld inombords, jag älskar programmering,
              jag vill alltid lära mig nya saker inom det och bli en bättre programmerare.  </p>
          </ClickShow>


          <ClickShow title={"Jobb"}>
              <p> Det är ett år kvar på utbildningen. Jag har arbetat i cirka 1 år och 7 månader för ett stort företag
              där jag dagligen har kontakt saker som angår e-handel. E-handel är något som jag tycker är riktigt intressant.
              Däremot är tjänsten inte relaterat till webbprogrammering.</p>
          </ClickShow>

          </div>

      </div>
    )
  }
}


module.exports = About;
