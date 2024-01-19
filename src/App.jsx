import React from 'react';
import { Provider } from 'react-redux';
import store from './assets/redux/store';
import CardPage from './assets/components/CardPage';


const App = () => {
  return (
    <Provider store={store}>
      <div>
        
        <CardPage />
      </div>
    </Provider>
  );
};

export default App;
