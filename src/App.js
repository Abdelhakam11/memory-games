import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards.component';
import { Provider } from 'react-redux';
import myStore from './redux/store';


function App() {
  return (
    <div className="App">
        <Provider store={myStore}>
          <Cards />
        </Provider>
        
      

    </div>
  );
}

export default App;
