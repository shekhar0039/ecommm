import Button from '@mui/material/Button';
import { MdOutlineDashboard } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../App';


const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);


    const context = useContext(MyContext);

    
    const isOpenSubmenu = (index) => {
        if (activeTab === index && isToggleSubmenu) {
            setIsToggleSubmenu(false); // Close submenu if it's already open
        } else {
            setActiveTab(index);
            setIsToggleSubmenu(true);  // Open submenu for new item or reopen
        }
    };

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
                                <span className="icon"><MdOutlineDashboard /></span>
                                Dashboard
                                <span className="arrow"><MdArrowForwardIos /></span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Button
                            className={`w-100 ${activeTab === 1 && isToggleSubmenu ===true ? 'active' : '' }`}
                            onClick={() => isOpenSubmenu(1)}
                        >
                            <span className="icon"><MdProductionQuantityLimits /></span>
                            Products
                            <span className="arrow"><MdArrowForwardIos /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/products">Product List</Link></li>
                                <li><Link to="/products/details">Product View</Link></li>
                                <li><Link to="/products/upload">Product Upload</Link></li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button
                            className={`w-100 ${activeTab === 2 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}
                            onClick={() => isOpenSubmenu(2)}
                        >
                            <span className="icon"><MdProductionQuantityLimits /></span>
                            Category
                            <span className="arrow"><MdArrowForwardIos /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 2 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Category List</Link></li>
                                <li><Link to="#">Add a category</Link></li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button
                            className={`w-100 `}
                        >
                            <span className="icon"><MdProductionQuantityLimits /></span>
                            <li><Link to="login">LogIn</Link></li>
                            
                        </Button>
                       
                    </li>
                    <li>
                        <Button
                            className={`w-100 `}
                        >
                            <span className="icon"><MdProductionQuantityLimits /></span>
                            <li><Link to="signup">SignUp</Link></li>
                            
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={`w-100 ${activeTab === 5 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}
                            onClick={() => isOpenSubmenu(5)}
                        >
                            <span className="icon"><MdProductionQuantityLimits /></span>
                            Products
                            <span className="arrow"><MdArrowForwardIos /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 5 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product List</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button
                            className={`w-100 ${activeTab === 6 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}
                            onClick={() => isOpenSubmenu(6)}
                        >
                            <span className="icon"><MdProductionQuantityLimits /></span>
                            Products
                            <span className="arrow"><MdArrowForwardIos /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 6 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product List</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <br />
                <div>
                    <div className='logoutWrapper'>
                        <div className='logoutBox'>
                            <Button variant="contained"><IoMdLogOut />Logout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
