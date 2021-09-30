import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.sass';

/** Brief description of this component */
const Template = ({ exampleRequiredProp, exampleOptionalProp }) => (
  <div className={styles.template}>
    <p>{exampleRequiredProp}</p>
    {
      exampleOptionalProp.length > 0 ? (
        <p>{exampleOptionalProp}</p>
      ) : null
    }
  </div>
);

Template.propTypes = {
  /** each prop must have brief description of prop for storybook */
  exampleRequiredProp: PropTypes.string.isRequired,
  /** example of an optional prop */
  exampleOptionalProp: PropTypes.string,
};

Template.defaultProps = {
  exampleOptionalProp: '', // all optional props must have a defaultProp
};

export default Template;
