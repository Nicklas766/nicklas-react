var React = require('react');
var queryString = require('query-string');
var api = require('../..//utils/api');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');
var Popup = require('../Popup');

function Project(props) {
    return (
        <div className='wrapper' style={{width:"85%", margin:"24px auto"}}>
          <div className='wrapper' style={{border:"solid 1px black"}}>
              <div style={{width:"45%"}}>
              <img
                  style={{width:"100%", minHeight:"280px", height:"100%"}}
                  src={props.project.img}
                  alt={'Avatar for ' + props.project.name}
              />
              </div>
              <table className='flexTable'>
                  <tr> <th>Namn:</th><td>{props.project.name}</td> </tr>
                  <tr> <th>Fullständigt namn:</th> <td>{props.project.fullName}</td> </tr>
                  <tr> <th>Språk:</th> <td>{props.project.language}</td> </tr>
                  <tr> <th>Betyg:</th> <td>{props.project.grade}</td> </tr>
                  <tr> <th>Länk till projektet: </th> <td> {props.project.link && <Link to={props.project.link} target={"_blank"}>{props.project.link}</Link>}</td> </tr>
                </table>
            </div>

            <div style={{width:"100%", color:"black"}}>
              <p> {props.project.description}</p>
            </div>
        </div>
    )
}

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: null,
            error: null,
            loading: true,
        };
    }
    componentDidMount () {
        console.log("hello");
        var project = this.props.id;
        api.fetchProject([
            project.project
        ]).then(function (results) {

            console.log(results);
            if (results === null) {
                return this.setState(() => ({
                        error: 'Looks like an error occured',
                        loading: false
                    })
                );
            }

            this.setState(() => ({
                error: null,
                project: results[(this.props.id - 1)],
                loading: false,
            })
            );
        }.bind(this));
    }

    render() {


        return (
                <Popup>


                    <div style={{background:"white", maxWidth:"760px", margin:"auto"}}>
                    {this.state.loading && <div className='loader'> Loading...</div>}
                    {this.state.error && <h1> this.state.error </h1>}
                    {!this.state.loading && <Project project={this.state.project} />}

                    </div>
                </Popup>

        )
    }
}

module.exports = Results;
