import React, { useState } from "react";
import './App.css';
// import Section from './components/Section/index.jsx';
import Hours from './containers/Hours/index.jsx';
import Branding from './containers/Branding/index.jsx';


// data is here, but in would normally live on a server
const _brandingData = [
  {key: "Full Name", value: "Bright.md Hospital"},
  {key: "Short Name", value: "BMD"},
  {key: "Welcome Text", value: "afafsad"},
];

const _hoursData = [
  {day: "Sunday", availability: "closed", openTime: "", closeTime: ""},
  {day: "Monday", availability: "open", openTime: "9:00 AM", closeTime: "5:00 PM"},
  {day: "Tuesday", availability: "open", openTime: "9:00 AM", closeTime: "5:00 PM"},
  {day: "Wednesday", availability: "open", openTime: "9:00 AM", closeTime: "5:00 PM"},
  {day: "Thursday", availability: "open", openTime: "9:00 AM", closeTime: "5:00 PM"},
  {day: "Friday", availability: "open", openTime: "9:00 AM", closeTime: "5:00 PM"},
  {day: "Saturday", availability: "closed", openTime: "", closeTime: ""},
];

function App() {

  const [brandingMode, setBrandingMode] = useState('view');
  const [hoursMode, setHoursMode] = useState('view');
  const [brandingData, setBrandingData] = useState(_brandingData);
  const [hoursData, setHoursData] = useState(_hoursData);

  // async function save() {
  //   saveViaAPI();
  //   await setLocalData(); // or get from API which is even better
  // }

  function saveHoursData(data) {
    setHoursMode('edit');
    setHoursData(data);
    setHoursMode('view');
  }

  function saveBrandingData(data) {
    // usually here we'd post to an API to save, but for simplicity we are just
    // updating local data. In the API case might use asyn/await (e.g. above)
    // or middleware like sagas depending on the complexity of the app
    setBrandingMode('edit');
    setBrandingData(data);
    setBrandingMode('view');
  }

  return (
    <div className="App">
      <Hours
        mode={hoursMode}
        data={hoursData}
        onUpdate={data=>saveHoursData(data)}
      />
      <Branding
        mode={brandingMode}
        data={brandingData}
        onUpdate={data=>{saveBrandingData(data)}}
      />
    </div>
  );
}

export default App;
