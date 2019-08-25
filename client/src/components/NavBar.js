import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {

  state = {activeItem: 'Home'}
  handleItemClick = (e, {name}) => this.setState({ activeItem: name})

  render() {
    const {activeItem} = this.state
    return (
      // <div>
      //   <Menu pointing secondary>
      //     <Link to="/">
      //       <Menu.Item name="home" />
      //     </Link>
      //     <Link to="/Bio">
      //       <Menu.Item name='Bio' />
      //     </Link>
      //   </Menu>
      // </div>
      <div >
        <Menu style={styles.Menu} inverted pointing secondary>
          <Menu.Item
            as={Link}
            to='/Music'
            name='Music'
            active={activeItem === "Music"}
            onClick={this.handleItemClick}
            style={styles.Item}
          />
          <Menu.Item 
            as={Link} 
            to='/' 
            name='Home'
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
            style={styles.Item}
          />
          <Menu.Item
            as={Link}
            to='/Bio'
            name='Bio'
            active={activeItem === "Bio"}
            onClick={this.handleItemClick}
            style={styles.Item}
          />
        </Menu>
      </div>
    );
  }
}

const styles = {
  Menu: {
    display: 'flex',
    justifyContent: 'center',
  },
  Item: {
    marginLeft: "10%",
    marginRight: "10%"
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
