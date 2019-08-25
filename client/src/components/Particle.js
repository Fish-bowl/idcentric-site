import React from 'react'
import Particles from 'react-particles-js';

const styles = {
  particle: {
    position: 'fixed',

  }
}

const config = {
  particles: {
    interactivity: {
      detect_on: "canvas", "events": {
        onhover: {
          enable: true, mode: "repulse"
        },
        onclick: { enable: true, "mode": "push" }
      }
    }
  }
}

class Particle extends React.Component {

  componentDidMount() {
    document.body.style.backgroundColor = "black"
  }
  render() {
    return (
      <Particles style={styles.particle} params={config.particles} />
    );
  };
}

export default Particle
