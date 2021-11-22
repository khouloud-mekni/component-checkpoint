import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Age from './Component/Profile/Age';
import Travail from './Component/Profile/Travail';
import Email from './Component/Profile/Email';
import './Component/Profile/ProfilePoto.css'
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Travail/>
      <Age/>
      <Address/>
      <Email/>
      
    </div>
  );
}

export default App;
