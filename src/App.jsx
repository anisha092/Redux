// import React from 'react'
// import { Provider } from 'react-redux'
// import store from './ReduxContainer/Store'
// import Bookcontainer from './ReduxContainer/Bookcontainer'
// const App = () => {
//   return (
//    <Provider store={store}>
//    <div>
//     <Bookcontainer/>
//    </div>

//    </Provider>
//   )
// }

// export default App


import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes component
import Home from './Routing/Home';
import Contact from './Routing/Contact';
import About from './Routing/About';

const App = () => {
  return (
    <>
      <h1>React Route Tutorial</h1>
      <Routes> {/* Wrap routes in a Routes component */}
        <Route path='' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
