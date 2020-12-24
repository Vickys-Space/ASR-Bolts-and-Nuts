import "./App.css";
import React, { useState } from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Products from "./Components/Pages/Products";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import SignUp from "./Components/Pages/SignUp";
import ScrollToTop from "./ScrollToTop";

// Product Items
import Bolts from "./Components/Products/ProductItems/Bolts";
import BNSet from "./Components/Products/ProductItems/BNSet";
import BNWSet from "./Components/Products/ProductItems/BNWSet";
import CotterPin from "./Components/Products/ProductItems/CotterPin";
import CommonItem from "./Components/Products/ProductItems/CommonItem";
import CricLock from "./Components/Products/ProductItems/CricLock";
import FloatNeedle from "./Components/Products/ProductItems/FloatNeedle";
import Fuse from "./Components/Products/ProductItems/Fuse";
import Nut from "./Components/Products/ProductItems/Nut";
import NutsForBolts from "./Components/Products/ProductItems/NutsForBolts";
import ORrings from "./Components/Products/ProductItems/ORrings";
import RareItem from "./Components/Products/ProductItems/RareItem";
import Relay from "./Components/Products/ProductItems/Relay";
import Screw from "./Components/Products/ProductItems/Screw";
import ShieldClips from "./Components/Products/ProductItems/ShieldClips";
import SpecialKit from "./Components/Products/ProductItems/SpecialKit";
import Washer from "./Components/Products/ProductItems/Washer";
import Footer from "./Components/Footer/Footer";
import TableLayout from "./Components/Table/TableLayout";
import CB8spn from "./Components/Products/ItemList/Bolts/CB8spn";

// import Image from "../src/Components/Assets/images/Bg.png"

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <div className="hero-img">
            <Route path="/" exact component={Home} />
            <Route path="/Products" exact component={Products} />
            <Route path="/About-Us" exact component={AboutUs} />
            <Route path="/Contact-Us" exact component={ContactUs} />
            {/* Product Items */}
            <Route path="/Bolts">
              <Bolts />
              <Footer />
            </Route>

            <Route path="/BNSet">
              <BNSet />
              <Footer />
            </Route>

            <Route path="/BNWSet">
              <BNWSet />
              <Footer />
            </Route>

            <Route path="/CotterPin">
              <CotterPin />
              <Footer />
            </Route>

            <Route path="/CommonItem">
              <CommonItem />
              <Footer />
            </Route>

            <Route path="/CricLock">
              <CricLock />
              <Footer />
            </Route>

            <Route path="/FloatNeedle">
              <FloatNeedle />
              <Footer />
            </Route>

            <Route path="/Fuse">
              <Fuse />
              <Footer />
            </Route>

            <Route path="/Nut">
              <Nut />
              <Footer />
            </Route>

            <Route path="/NutsForBolts">
              <NutsForBolts />
              <Footer />
            </Route>

            <Route path="/ORrings">
              <ORrings />
              <Footer />
            </Route>

            <Route path="/Relay">
              <Relay />
              <Footer />
            </Route>

            <Route path="/Screw">
              <Screw />
              <Footer />
            </Route>

            <Route path="/ShieldClips">
              <ShieldClips />
              <Footer />
            </Route>

            <Route path="/SpecialKit">
              <SpecialKit />
              <Footer />
            </Route>

            <Route path="/Washer">
              <Washer />
              <Footer />
            </Route>

            <Route path="/RareItem">
              <RareItem />
              <Footer />
            </Route>

            <Route path="/CB8spn">
              <CB8spn />
              <Footer />
            </Route>

            <Route path="/TableLayout">
              <TableLayout />
              <Footer />
            </Route>
      

            {/* <Route path="/Sign-Up" exact component={SignUp} /> */}
            {!isSubmitted ? (
              <Route
                path="/Sign-Up"
                exact
                component={SignUp}
                submitForm={submitForm}
              />
            ) : (
              <Route path="/" exact component={Home} />
            )}
          </div>
        </Switch>
      </Router>
      {/* <Route path=""/> */}
    </>
  );
};

export default App;
