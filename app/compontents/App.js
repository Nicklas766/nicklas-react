var React = require('react');

// Router
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var WrappedApp = require('./WrappedApp');
// Route Paths
var Home = require('./page/Home');
var About = require('./page/About');
var Projects = require('./page/Projects');
var Results = require('./page/Results');
var AboutPage = require('./page/AboutPage');



class App extends React.Component {

    render() {
        return (
            <Router>
            <WrappedApp>
                    <Switch>

                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />


                            <Route exact path='/projects' component={Projects} />
                            <Route path='/projects/:id' component={Projects} />


                        <Route path='/aboutpage' component={AboutPage} />
                        <Route render={() => <p>Not Found </p>} />
                    </Switch>
            </WrappedApp>
            </Router>
        )
    }
}

module.exports = App;
