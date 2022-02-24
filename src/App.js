import './App.css';
import car from './Redcar.png';
import logo from '.applogo.png';

function App() {
    return (
        <div className="App">
            <div className="AppHeaderBar">
                <img src={car} className="AppAavator"/>
                <img src={logo} className="AppLogo"/>
                   <div className="AppHeaderFont">
                      <div className="AppLogo">
                          <div className="AppIcon1">
                            <div className="AppIcon2">
                            <div className="AppIcon3">

                         </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
        </div>
        
    );
}

export default App;