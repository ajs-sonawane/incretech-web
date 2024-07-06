import "./App.css";
import Header from "./ui/components/Header";
import Technology from "./ui/pages/Technology";
import Footer from "./ui/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Camera from "./ui/services/Camera";
import Hardware from "./ui/services/Hardware";
import Biometric from "./ui/services/Biometric";
import ElectricWork from "./ui/services/ElectricWork";
import MobileSignalBooster from "./ui/services/MobileSignalBooster";
import Wifi from "./ui/services/Wifi";
import Intercom from "./ui/services/Intercom";
import Home from "./ui/pages/Home";
import Contact from "./ui/pages/Contact";
import { useState, useEffect } from "react";
import Sidebar from "./ui/components/Sidebar";
import { send } from "emailjs-com";

function App() {
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    phone: "phone",
    email: "email",
    subject: "subject",
  });

  useEffect(() => {
    // stops loading
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    send("service_mbk703h", "template_i2xxdng", toSend, "Mtra9SpfP3kxiB6u-")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  function handleChange(e) {
    console.log(e.target.value);
    setToSend({ ...toSend, [e.target.name]: [e.target.value] });
  }

  return (
    <Router>
      {/* {!loading && ( */}
      <div className="App">
        <Header setClick={setClick} />
        {click && <Sidebar setClick={setClick} click={click} />}

        <Routes>
          <Route path="/" element={<Home loading={loading} />} />
          <Route
            path="/contact"
            element={
              <Contact
                toSend={toSend}
                onSubmit={onSubmit}
                handleChange={handleChange}
              />
            }
          />
          <Route path="/technology" element={<Technology />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/biometric" element={<Biometric />} />
          <Route path="/electricwork" element={<ElectricWork />} />
          <Route path="/wifi" element={<Wifi />} />
          <Route path="/singlebooster" element={<MobileSignalBooster />} />
          <Route path="/intercom" element={<Intercom />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
