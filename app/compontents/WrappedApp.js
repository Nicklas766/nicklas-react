var React = require('react');
var Footer = require('./Footer');
var NavLink = require('react-router-dom').NavLink;
var Link = require('react-router-dom').Link;

function Header(props) {
    return (
    <div className='header-default'>
        <div className={props.headerClass}>
            <div className='logo-header'>
                <NavLink exact activeClassName='active' to='/'>
                    Nicklas Envall
                </NavLink>
            </div>
            <div className='navbar-header'>
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>

                <NavLink activeClassName='active' to='/about'>
                    Om mig
                </NavLink>

                <NavLink activeClassName='active' to='/projects'>
                    Projekt
                </NavLink>

            </div>

            <div className="hamburger-header">

              <div className={props.menuClass} onClick={props.onSelect}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
              </div>
          </div>

        </div>
    </div>
    );
}
function HiddenMenu(props) {
    return (
        <div className={props.className}>
            <div className="dropdown-header"> <h1> Meny </h1> </div>
            <Link exact activeClassName='active' to='/'>
                Home
            </Link>

            <Link activeClassName='active' to='/about'>
                Om mig
            </Link>

            <Link activeClassName='active' to='/projects'>
                Projekt
            </Link>
            <Link activeClassName='active' to='/aboutpage'>
                Om sidan
            </Link>
        </div>
    );
}

class WrappedApp extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            wrapper: 'wrap-all',
            hiddenClass: 'dropdown-content',
            headerClass: 'header wrapper',
            menuClass: 'hamburgerbtn',
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClickOff = this.handleClickOff.bind(this);
        this.handleClickOn = this.handleClickOn.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {

        if (window.scrollY > 0) {
            this.setState({
              headerClass: 'scroll-header header wrapper'
            });
        } else {
            this.setState({
              headerClass: 'header wrapper'
            });
        }
    }
    handleClickOff() {
        if (this.state.wrapper == "wrap-all move") {
            this.setState({
              menuClass: 'hamburgerbtn',
              wrapper: 'wrap-all',
              hiddenClass: 'dropdown-content'
            });
        }
    }

    handleClickOn() {
        if (this.state.menuClass == "hamburgerbtn") {
            this.setState({
                menuClass: 'hamburgerbtn change',
                wrapper: 'wrap-all move',
                hiddenClass: 'dropdown-content show'
            });
        }
    }

    render() {
        return (
            <div onClick={this.handleClickOff}>
                <HiddenMenu className={this.state.hiddenClass}/>
                <div className={this.state.wrapper}>

                    <Header headerClass={this.state.headerClass} menuClass={this.state.menuClass} onSelect={this.handleClickOn} />
                    {this.props.children}
                    <Footer />

                </div>
            </div>

        )
    }
}

module.exports = WrappedApp;
