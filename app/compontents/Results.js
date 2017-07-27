var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');



function Project(props) {
    return (
        <div>
            <h1>{props.project.name}</h1>
            <h3>namn: {props.project.name}</h3>
            <h3>Språk: {props.project.language}</h3>
            <img
                className='avatar'
                src={props.project.img}
                alt={'Avatar for ' + props.project.name}
            />
            <h3>Beskrivning: {props.project.description}</h3>
            <li>Länk till projektet: <a href={props.project.link}>{props.project.link}</a></li>
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
            <div className='row'>
            <Project
                project={this.state.project}
             />
            </div>
        )
    }
}

module.exports = Results;
