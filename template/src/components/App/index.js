import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTemplate from 'pages/_PageTemplate';

/** The primary application root component (besides the /index.js entry) */
const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <PageTemplate path="/" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
