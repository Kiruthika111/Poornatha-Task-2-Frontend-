import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Sidebar1 from './Sidebar1.js';
import Button from './Buttons.js'
import Video from './Video.js'
function App() {
  return (
    <div className="App">
    <div className="top">
      <Header />
    </div>
    <div className="Navbar">
    <div className="leftnav">
      <Sidebar></Sidebar>
    </div>
    <div className="rightnav">
     <Video />
    </div>
    
    
    </div>


    {/* <div className="Navbar">
    <div className="leftnav1">
      <Sidebar1></Sidebar1>
    </div>
    <div className="rightnav">
    <Video />
    </div>
    
    
    </div> */}
    
    {/* <div className="rightnavVideos">
      <Video />
    </div> */}

     {
     /* 
     igmore 1
     <div className="center">
       <Sidebar />
       
     </div> */}
     
    {/* <div className="VideoView"> 
    igmore 1
    */}


    {/* //comment begins
    <div className="top">
       <Button />
    

      <div className="center">
       <Sidebar />
       </div>
     </div>
     <div className="VideoView">
      </div>  


 //comment ends */}


    </div>
  );
}

export default App;
