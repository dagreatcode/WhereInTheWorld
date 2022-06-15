import React, { useEffect, useState } from "react";
import AlertContext from "./utils/ContextAPI/AlertContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Gas from "./containers/Gas/Gas";
import Covid from "./containers/Covid/Covid";
import WhereToGo from "./containers/WhereToGo/WhereToGo";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound/NotFound";
import AdminUsers from "./containers/Admin/AdminUsers";
import AdminNewUser from "./containers/Admin/AdminNewUser";
import AuthContext from "./utils/ContextAPI/AuthContext";
import {setAxiosDefault} from "./utils/axiosDefault/axiosDefault"
import Alert from "./components/Alert";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import ProtectedRoute from 'react-protected-route-component'
function App() {
  const [jwt, setJwt] = useState("");

  const [isLoggedIn, setisLoggedIn] = useState(null);
  // const logIn = () => {
  // };
  const logOut = () => {
    setisLoggedIn(false);
  };
  const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
    }
    
    return children;
   };

   const [alert, setAlert] = useState({
    message: "Welcome",
    type: "success"
   })

      useEffect(()=>{
        const localJwt = localStorage.getItem("jwt")
        if (localJwt){
          setJwt(localJwt)
        }
      },[])

      useEffect(() => {
        if (jwt){
          setAxiosDefault(jwt)
          setisLoggedIn(true);
          localStorage.setItem("jwt",jwt)
        }
          },[jwt])

  useEffect(() => {
    console.log("Make an API call.");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <AuthContext.Provider value={{jwt,setJwt}}>
      <AlertContext.Provider value={{...alert, setAlert:setAlert}}>

        <NavBar />
        <Alert />
          {isLoggedIn ? (
            <button onClick={logOut}>Logout</button>
            ) : (
            <button>Please Login</button>
          )}
        <Routes>
          <Route exact path="/AdminUsers" element={<AdminUsers />} />
          {/* <ProtectedRoute.Protected path="/AdminUsers" element={<AdminUsers />} /> */}
          {/* <Route path='/AdminUsers'
            element={
            <Protected isLoggedIn={isLoggedIn}>
            <AdminUsers />
            </Protected>
            }
          /> */}
          <Route exact path="/AdminNewUser" element={<AdminNewUser />} />
          {/* <Route path='/AdminNewUser'
            element={
            <Protected isLoggedIn={isLoggedIn}>
            <AdminNewUser />
            </Protected>
            }
          /> */}
          <Route exact path="/Login" element={<Login />} />
          {/* <Route exact path="/Gas" element={<Gas />} /> */}
          <Route path='/Gas'
            element={
            <Protected isLoggedIn={isLoggedIn}>
            <Gas />
            </Protected>
            }
          />
          {/* <Route path='/Covid'
            element={
            <Protected isLoggedIn={isLoggedIn}>
            <Covid />
            </Protected>
            }
          />
          <Route path='/WhereToGo'
            element={
            <Protected isLoggedIn={isLoggedIn}>
            <WhereToGo />
            </Protected>
            }
          /> */}
          <Route exact path="/Covid" element={<Covid />} />
          <Route exact path="/WhereToGo" element={<WhereToGo />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route render={() => <h1>Page not found</h1>} /> */}
          {/* <ProtectedRoute
          path="/protected"
          redirectRoute="/"
          guardFunction={() => {
            const token = localStorage.getItem('authToken');
            if(token){
              return true;
            }else{
              return false;
            }
          }}
          component={() => <h1>Protected Route</h1>}
          exact
        /> */}
        </Routes>
        </AlertContext.Provider>
        </AuthContext.Provider>
    </Router>
  );
}

export default App;
