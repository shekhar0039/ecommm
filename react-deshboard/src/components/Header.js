import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.webp';
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "./SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { MyContext } from "../App";
import UserAvtarImgComponent from "./UserAvtarImg";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  // State for account and notification menus
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const [notifAnchorEl, setNotifAnchorEl] = useState(null);

  const isAccountMenuOpen = Boolean(accountAnchorEl);
  const isNotifMenuOpen = Boolean(notifAnchorEl);

  const context = useContext(MyContext)

  

  // Handlers
  const handleAccountClick = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchorEl(null);
  };

  const handleNotifClick = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotifClose = () => {
    setNotifAnchorEl(null);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-2 part1">
              <Link to={'/'} className="d-flex align-items-center logo">
                <img src={logo} alt="Logo" />
                <span className="me-2">HOTASH</span>
              </Link>
            </div>

            {
              context.windowWidth>992 &&
              <div className="col-sm-3 d-flex align-items-center part2 res-hide">
              <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                {
                  context.isToggleSidebar===false ? <MdOutlineMenuOpen /> : <MdOutlineMenu/>
                }
              </Button>
              <SearchBox />
            </div>
            }

            

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle mr-3"onClick={()=>context.setThemeMode(!context.themeMode)}>
                <MdOutlineLightMode /></Button>
              {/* <Button className="rounded-circle mr-3"><MdDarkMode /></Button>
              <Button className="rounded-circle mr-3"><IoMdCart /></Button>
              <Button className="rounded-circle mr-3"><MdEmail /></Button> */}

              {/* Notification Button */}
              <Button className="rounded-circle mr-3" onClick={handleNotifClick}>
                <IoNotificationsOutline />
              </Button>

              <Button className="rounded-circle mr-3" onClick={()=>context.openNav()}>
                <IoMenu />
              </Button>

              {/* Notification Menu */}
              <Menu

                anchorEl={notifAnchorEl}
                className="notifications dropdown_list"
                id="notifications"
                open={isNotifMenuOpen}
                onClose={handleNotifClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >

                <div className="head pl-3 pb-0 ">
                  <h4>Orders (12) </h4>
                </div>
                <Divider className="mb-1" />
                <div className="scroll">
                <MenuItem onClick={handleNotifClose}>
                  <div className="d-flex ">
                    <div>
                      <UserAvtarImgComponent img={"https://mironcoder-hotash.netlify.app/images/avatar/01.webp"}/>
                    </div>

                    <div className="dropdownInfo">
                      <h4><span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                      <p className="text-sky mb-0">Few secons ago</p>
                    </div>
                    
                  </div>
                </MenuItem>
                <MenuItem onClick={handleNotifClose}>
                  <div className="d-flex ">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User" />
                        </span>
                      </div>
                    </div>

                    <div className="dropdownInfo">
                      <h4><span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                      <p className="text-sky mb-0">Few secons ago</p>
                    </div>
                    
                  </div>
                </MenuItem>
                <MenuItem onClick={handleNotifClose}>
                  <div className="d-flex ">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User" />
                        </span>
                      </div>
                    </div>

                    <div className="dropdownInfo">
                      <h4><span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                      <p className="text-sky mb-0">Few secons ago</p>
                    </div>
                    
                  </div>
                </MenuItem>
                <MenuItem onClick={handleNotifClose}>
                  <div className="d-flex ">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User" />
                        </span>
                      </div>
                    </div>

                    <div className="dropdownInfo">
                      <h4><span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                      <p className="text-sky mb-0">Few secons ago</p>
                    </div>
                    
                  </div>
                </MenuItem>
                <MenuItem onClick={handleNotifClose}>
                  <div className="d-flex ">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User" />
                        </span>
                      </div>
                    </div>

                    <div className="dropdownInfo">
                      <h4><span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                      <p className="text-sky mb-0">Few secons ago</p>
                    </div>
                    
                  </div>
                </MenuItem>
                <MenuItem onClick={handleNotifClose}>
                  <div className="d-flex ">
                    <div>
                      <div className="userImg">
                        <span className="rounded-circle">
                          <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User" />
                        </span>
                      </div>
                    </div>

                    <div className="dropdownInfo">
                      <h4><span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                      <p className="text-sky mb-0">Few secons ago</p>
                    </div>
                    
                  </div>
                </MenuItem>
                </div>

                <div className="pl-3 pr-3 w-100">
                <Button className="btn-blue w-100">View all notifications</Button>
                </div>
                
              </Menu>

              {
                context.isLogin!==true ? 
                <Link to={"/login"}> <Button className="btn-blue btn-lg btn-round">Sign In</Button></Link> 
                :
                // {/* Account Info and Menu */}
              <div className="myAccWrapper" onClick={handleAccountClick}>
                <Button className="myAcc d-flex align-items-center">
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User" />
                    </span>
                  </div>
                  <div className="userInfo res-hide">
                    <h4>Shekhar</h4>
                    <p className="mb-0">@chinu7771</p>
                  </div>
                </Button>
              </div>
              }

             

              

              <Menu
                anchorEl={accountAnchorEl}
                open={isAccountMenuOpen}
                onClose={handleAccountClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleAccountClose}><Avatar /> My account</MenuItem>
                <Divider />
                <MenuItem onClick={handleAccountClose}>
                  <ListItemIcon><PersonAdd fontSize="small" /></ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem onClick={handleAccountClose}>
                  <ListItemIcon><Logout fontSize="small" /></ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
