var React = require('react');

// Router
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var WrappedApp = require('./WrappedApp');
// Route Paths
var Home = require('./Home');
var About = require('./About');
var Projects = require('./Projects');
var Results = require('./Results');


class App extends React.Component {

    render() {
        return (
            <Router>
            <WrappedApp>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/projects' component={Projects} />
                        <Route path='/projects/results' component={Results} />
                        <Route render={() => <p>Not Found </p>} />
                    </Switch>
            </WrappedApp>
            </Router>
        )
    }
}

module.exports = App;
