//import logo from './logo.svg';

// import './App.scss';
import './toptalent.scss';
import './contactpage.scss';

// import './grid
// import Navbar from './component/Navbar';
// import Toptalent from './component/pages/toptalent';

// import { Routes, Route } from "react-router-dom"
 import ContactPage from './component/pages/contactPage';


function App() {
  return (
    <div className="App">

      
      {/* <Navbar/> */}
      {/* <Toptalent /> */}
     <ContactPage/>
        {/* <Routes>
          
        <Route path="/contactPage" element={<ContactPage />} />
        </Routes> */}

    </div>

  );
}

export default App;
