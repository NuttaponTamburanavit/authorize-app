import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';

import PublicRoutes from './router';
// import logo from './logo.svg';
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <PublicRoutes history={history} />
    </Provider>
  )
}

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <PublicRouter />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
