/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Sidebar from 'react-sidebar';
import { NavLink } from 'react-router-dom';

import './styles.css';
import menu from '../../assets/images/menu-lateral.png';
import logo from '../../assets/images/logo-viva-decora.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <>
        <header className="page-header">
          <Sidebar
            className="sidebar"
            sidebar={
              <div className="navLinks">
                <NavLink exact className="link" to="/">
                  FILMES NÃO CURADOS
                </NavLink>
                <NavLink className="link" to="/LikedMovies">
                  FILMES CURTIDOS
                </NavLink>
                <NavLink className="link" to="/DislikedMovies">
                  FILMES NÃO CURTIDOS
                </NavLink>
              </div>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{
              sidebar: {
                background: '#444444',
                transition: 'transform .3s ease-out',
              },
            }}
          >
            <button
              type="button"
              className="button"
              onClick={() => this.onSetSidebarOpen(true)}
            >
              <img src={menu} alt="menu button" />
            </button>
          </Sidebar>
          <div className="logo">
            <img className="logo" src={logo} alt="viva decora logo" />
          </div>
        </header>
        <header className="page-header-desktop">
          <div className="logo">
            <img className="logo" src={logo} alt="viva decora logo" />
          </div>
          <div className="navLinks">
            <NavLink exact className="link" to="/">
              FILMES NÃO CURADOS
            </NavLink>
            <NavLink className="link" to="/LikedMovies">
              FILMES CURTIDOS
            </NavLink>
            <NavLink className="link" to="/DislikedMovies">
              FILMES NÃO CURTIDOS
            </NavLink>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
