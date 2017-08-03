var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');


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
              <div style={{width:"55%", background:"white", color:"black", textAlign:"center"}}>
                <table style={{height:"100%", width:"100%"}}>
                  <tr> <th>Namn:</th><td>{props.project.name}</td> </tr>
                  <tr> <th>Fullständigt namn:</th> <td>{props.project.fullName}</td> </tr>
                  <tr> <th>Språk:</th> <td>{props.project.language}</td> </tr>
                  <tr> <th>Betyg:</th> <td>{props.project.grade}</td> </tr>
                  <tr> <th>Länk till projektet: </th> <td><a href={props.project.link}>{props.project.link}</a></td> </tr>
                </table>
              </div>
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
        var project = queryString.parse(this.props.location.search);
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
                project: results[0],
                loading: false,
            })
            );
        }.bind(this));
    }
    render() {
        var error = this.state.error;
        var loading = this.state.loading;

        if (loading === true) {
            return <div className='loader'> Loading...</div>
        }

        if (error) {
            return (
                <div>
                    <p> {error} </p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }
        return (
            <div style={{background:"white", minHeight:"700px", maxWidth:"760px", margin:"auto"}}>
            <Project
                project={this.state.project}
             />
            </div>
        )
    }
}

module.exports = Results;
