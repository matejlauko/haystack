import Radium from 'radium';
import React, { PropTypes as RPT } from 'react';
import { colors, em } from '../../globals';

const HeadingHighlight = ({ children, style }) => (
  <strong style={[styles.main, style]}>
    {children}
    <span style={[styles.line, style && style.line]} />
  </strong>
);

HeadingHighlight.propTypes = {
  children: RPT.node,
  style: RPT.object
};

const styles = {
  main: {
    fontWeight: 'inherit',
    position: 'relative',
    color: colors.primary
  },
  line: {
    height: '3px',
    display: 'block',
    position: 'absolute',
    top: em(4, 65),
    right: '0',
    background: colors.primary
  }
};

export default Radium(HeadingHighlight);