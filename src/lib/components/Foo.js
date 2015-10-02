import React, { PropTypes } from 'react';

import styles from 'styles/foo';

class Foo extends React.Component {
  render () {
    return (
      <div className={styles.fooBar}>HELLO WORLD</div>
    );
  }
}
export default Foo;
