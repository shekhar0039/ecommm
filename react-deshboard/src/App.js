import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './responsive.css';
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SIgnUp";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Upload from "./pages/upload"
import CategoryAdd from "./pages/CategoryAdd"

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [isOpenNav,setIsOpenNav]=useState(false);

  // Initialize themeMode from localStorage (default = light)
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") === "dark" ? false : true
  );

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  

  

  useEffect(()=>{
    const handleResize = ()=>{
    setwindowWidth(window.innerWidth);
  };

    window.addEventListener('resize', handleResize);

  return()=>{
    window.removeEventListener('resize',handleResize)
  };

  },[]);

  const openNav=()=>{
    setIsOpenNav(true);
  }

  const values = {
    openNav,
    isOpenNav,
    setIsOpenNav,
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader,
    themeMode,
    setThemeMode,
    windowWidth,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHideSidebarAndHeader !== true && <Header />}

        <div className="main d-flex">
          {isHideSidebarAndHeader !== true && 
            <>
            <div className={`sideBarOverlay d-none ${isOpenNav===true && 'show'}`} onClick={()=>setIsOpenNav(false)}></div>
            <div className={`sidebarWrapper ${isToggleSidebar === true ? "toggle" : ""}${isOpenNav===true ? 'open' : ''}`}>
              <Sidebar />
            </div>
            </>
          }

          <div
            className={`content ${isHideSidebarAndHeader ===true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/details" element={<ProductDetails />} />
              <Route path="/products/upload" element={<Upload />} />
              <Route path="/upload" element={<Upload/>}/>
              <Route path="/categoryAdd" element={<CategoryAdd/>}/>
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
