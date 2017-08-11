var React = require('react');
var PropTypes = require('prop-types');
var api = require('../../utils/api');
var Link = require('react-router-dom').Link;
var Popup = require('../Popup');
var queryString = require('query-string');
var Results = require('./Results');


function SelectOption(props) {
    var languages = props.options.map(option =>
        <li
            onClick={props.onSelect.bind(null, option)}
            style={option === props.selected ? { color:'red'}: null}
            key={option}>
            {option}
        </li>
    );

    return (
        <ul className="languages">
            {languages}
        </ul>
    );
}

function ProjectGrid(props) {
    var projects = props.projects.map((project, index) =>
        <div className='widget' key={project.id}>
            <div className='popular-rank'><a href={project.link}>{project.name}</a></div>

            <li>Betyg: {project.grade}</li>

            <img
                className='avatar'
                src={project.img}
                alt={'Avatar for ' + project.name}
            />
            <li><Link
                className='button'
                to={'/projects/' + project.id}>
                Läs mer
            </Link></li>
            <li>{project.language}</li>
        </div>
    );
    return (
        <ul className="news-container">
            <h1> Mina projekt </h1>
            {projects}
        </ul>
    );
}

class Projects extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedOption: "Språk",
            selectedLanguage: "Alla",
            projects: null
        };
        this.updateProjects = this.updateProjects.bind(this);
        this.updateOption = this.updateOption.bind(this);
    }

    componentDidMount() {
      window.scrollTo(0, 0);
        // AJAX request
        this.updateProjects(this.state.selectedLanguage);
    }

    updateOption(option) {
        console.log(option);
        this.setState(() => ({
                selectedOption: option,
                selectedLanguage: null,
            })
        );
    }
    updateProjects(lang) {
        this.setState(() => ({
                selectedLanguage: lang,
                repos: null
            })
        );

        api.fetchProjects(lang)
            .then(function (projects) {
                this.setState(() => ({projects: projects}))
            }.bind(this));
    }


    render() {
        var project = queryString.parse(this.props.location.search);
        console.log(project);
        return (
            <div className='news-wrapper' style={{backgroundImage: "url('http://voidzy.com/img/typing.jpg')", minHeight:700}}>

            {this.props.match.params.id != undefined && <Results id={this.props.match.params.id} key={this.props.match.params.id} />}
                <div className='featured-widget'>
                    <h1> Välj hur du vill sortera </h1>
                    <SelectOption options={["Språk", "Typ"]} selected={this.state.selectedOption} onSelect={this.updateOption}/>
                    {this.state.selectedOption == "Språk" && <SelectOption selected={this.state.selectedLanguage} options={["Alla", "PHP", "Javascript", "Python"]} onSelect={this.updateProjects}/>}
                    {this.state.selectedOption == "Typ" && <SelectOption selected={this.state.selectedLanguage} options={["Skolprojekt", "Hobby"]} onSelect={this.updateProjects}/>}

                </div>
                {!this.state.projects ? <ul className="news-container"><div className='loader'> Loading...</div></ul> : <ProjectGrid projects={this.state.projects} match={this.props.match} />}

            </div>
            )
    }
}

module.exports = Projects;
