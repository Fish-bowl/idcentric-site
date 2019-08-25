import React from 'react'

const styles = {
  container: {
    minHeight: '100%',
    position: 'relative',
    borderTop: "1px solid #E7E7E7",
    paddingBottom: '10px',

  },
  header: {
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  },
  subHeader: {
    color: 'white',
    textAlign: 'center',
    margin: '0',
    padding: '0',
    height: '100%'
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100 %',
    height: '60px',
    background: '#6cf',
  },
}

class Footer extends React.Component {
  render() {
    return (
      <div style={styles.container} >
        <div style={styles.header} >Thank You For Your Time</div>
        <div style={styles.subHeader} >Max Whitaker, 936 s 200 w, Salt Lake City, UT 84101</div>
        <div style={styles.footer} ></div>
      </div>
    )
  }
}

export default Footer
