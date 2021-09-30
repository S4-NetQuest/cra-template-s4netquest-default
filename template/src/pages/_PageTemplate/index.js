import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './styles.module.sass';

/** Template for Pages */
const PageTemplate = ({ path }) => (
  <motion.div
    key={path}
    className={`page content ${styles.page}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
  >
    <section className="section">
      <h1 className="title">This is the Page Template (with animated transitions)!</h1>
    </section>
  </motion.div>
);

PageTemplate.propTypes = {
  /** location.pathname for the framer-motion key */
  path: PropTypes.string.isRequired,
};

export default PageTemplate;
