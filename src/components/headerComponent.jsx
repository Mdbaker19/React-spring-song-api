import React, {Component} from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <ul id="dropdown1" className="dropdown-content">
                        <li><a href="/add-song/create">Add</a></li>
                    </ul>
                    <nav>
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">Home</a>
                            <ul className="right">
                                <li className="hide-on-small-only"><a href="/add-song/create">Add</a></li>
                                <li><a className="dropdown-trigger hide-on-med-and-up" href="#!" data-target="dropdown1">Dropdown<i
                                    className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                        </div>
                    </nav>

                </header>
            </div>
        );
    }
}

export default HeaderComponent;