import './App.css';
import logo from './images/ironhack-logo-xs.png';
import navbar from './images/menu-top-xs.png';
function App() {
  return (
    <div>
    <section className="ironHeder">
    <div className="navBContainer">  
    <img src={logo} className="IronhackLogo" alt="Ironlogo" />
    <img src={navbar} className="navBar" alt="navBar" />
    </div>
    <div className="App">Say hello to React JS</div>
    </section>
    </div>
  );
}
export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
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

// export default App;
