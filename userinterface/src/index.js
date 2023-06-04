import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../frontend/src/pages/Home";
import Menu from "../../frontend/src/pages/Menu";
import Contact from "../../frontend/src/pages/Contact";
import About from "../../frontend/src/pages/About";
import Login from "../../frontend/src/pages/Login";
import Newproduct from "../../frontend/src/pages/Newproduct";
import Signup from "../../frontend/src/pages/Signup";
import { store } from "../../frontend/src/redux/index.js";
import { Provider } from "react-redux";
import Cart from "../../frontend/src/pages/Cart";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/* <Route path="menu" element={<Menu />} /> */}
          <Route path="menu/:filterby" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="newproduct" element={<Newproduct />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
