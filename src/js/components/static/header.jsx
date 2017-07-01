import React from "react"
import {Link, NavLink} from "react-router-dom"

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            navCollapsed: true
        };
        this._onToggleNav = this._onToggleNav.bind(this)
    }
    _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    };
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button
                                aria-expanded='false'
                                className='navbar-toggle collapsed'
                                onClick={this._onToggleNav}
                                type='button'
                            >
                                <span className='sr-only'>Toggle navigation</span>
                                <span className='icon-bar'/>
                                <span className='icon-bar'/>
                                <span className='icon-bar'/>
                            </button>
                            <Link className="navbar-brand"
                                to={'/'}
                            >
                                <img src="images/logo.png"
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className={(this.state.navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink activeClassName="active" to={'/'}>How we work</NavLink></li>
                                <li><NavLink activeClassName="active" to={'/'}>Companies</NavLink></li>
                                <li><NavLink activeClassName="active" to={'/'}>Testimonials</NavLink></li>
                                <li><NavLink activeClassName="active" to={'/'}>Contact Us</NavLink></li>
                                <li><p className="navbar-btn"><Link to={'/'} className="btn btn-default">Sign Up</Link></p></li>
                                <li><p className="navbar-btn"><Link to={'/'} className="btn btn-default">Login</Link></p></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;