import { useContext, useEffect, useState } from 'react';
import Logo from '../assets/images/logo.webp'
import { MyContext } from '../App';
import Button from '@mui/material/Button';
import pattern from "../assets/images/pattern.webp"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaHome } from "react-icons/fa";


const SignUp=()=>{
    
        const [inputIndex, setInputIndex] = useState(null);
            const [isShowPassword, setisShowpassword] =useState(false)
            const [isShowConfirmPassword, setisShowConfirmPassword] =useState(false)
            

        
            const context = useContext(MyContext)
            useEffect(() => {
                context.setisHideSidebarAndHeader(true);
                window.scrollTo(0,0);
            }, []);
        
            const focusInput = (index) => {
                setInputIndex(index);
            }
            return (
                <>
                    <img src={pattern} className='loginPattern' />
                    <section className="loginSection signUpSection">
                        <div className='row'>
                            <div className='col-md-8 d-flex align-item-center flex-column part1 justify-content-center'>
                                <h1>BEST UX/UI FASHION <span className='text-sky'>ECOMMERCE DASHBOARD</span> & ADMIN PANEL</h1>
                                <p>Explore thousands of high-quality e commerce dashboard ui deisgn images on Dribbble. Your resource to get inspired, discover and connect with designers</p>

                               <div className='w-100 mt-4'>
                                 <Link to={"/"}>
                                 <Button className='btn-blue btn-lg btn-big'><FaHome /> Go To Home</Button>
                                 </Link>
                                 </div> 
                            </div>

                            <div className='col-md-4 pr-0'>
                                <div className="loginBox">
                            <div className='logo text-center'>
                                <img src={Logo} width="60px" />
                                <h5 className='font-weight-bold'>Register a new account</h5>
                            </div>
        
                            <div className='wrapper mt-3 card border mb-0'>
                                <form>
                                     <div className={`form-group  position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className='icon'><FaUser /></span>
                                        <input type='text' className='form-control' placeholder='enter your name' onFocus={() => focusInput(0)} 
                                        onBlur={() => setInputIndex(null)} autoFocus/>
                                    </div>
                                    <div className={`form-group  position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className='icon'><MdEmail /></span>
                                        <input type='text' className='form-control' placeholder='enter your email' onFocus={() => focusInput(1)} 
                                        onBlur={() => setInputIndex(null)} />
                                    </div>
        
                                    <div className={`form-group  position-relative ${inputIndex === 2 && 'focus'}`}>
                                        <span className='icon'><RiLockPasswordFill /></span>
                                        <input type={`${isShowPassword===true ? 'password' : 'text'}`} className='form-control' placeholder='enter your password'
                                        onFocus={() => focusInput(2)} 
                                        onBlur={() => setInputIndex(null)} />
        
                                        <span className='toggleShowPassword' onClick={()=>setisShowpassword(!isShowPassword)}>
                                            {
                                                isShowPassword===true ? <IoIosEyeOff/> : <IoMdEye/>
                                            }
                                          
                                        </span>
                                    </div>

                                    <div className={`form-group  position-relative ${inputIndex === 3 && 'focus'}`}>
                                        <span className='icon'><IoShieldCheckmarkSharp /></span>
                                        <input type={`${isShowConfirmPassword===true ? 'password' : 'text'}`} className='form-control' placeholder='confirm your password'
                                        onFocus={() => focusInput(3)} 
                                        onBlur={() => setInputIndex(null)} />
        
                                        <span className='toggleShowPassword' onClick={()=>setisShowConfirmPassword(!isShowConfirmPassword)}>
                                            {
                                                isShowConfirmPassword===true ? <IoIosEyeOff/> : <IoMdEye/>
                                            }
                                          
                                        </span>
                                    </div>
                                     <FormControlLabel required control={<Checkbox />} label="agree to the all Terms & Conditions" />
        
                                    <div className='form-group'>
                                        <Button className='btn-blue btn-lg w-100 btn-big'>Sign Un</Button>
                                    </div>
                                    <div className='form-group text-center mb-0'>
                                        <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                            <span className='line'></span>
                                            <span className='txt'>or</span>
                                            <span className='line'></span>
                                        </div>
                                        <Button variant="outlined" color="primary" className='w-100 btn-lg btn-big loginWithGoogle'>SIgn Up with Google</Button>
                                    </div>
                                </form>
                                <span className='text-center d-block mt-3'>
                                                 Have an Account?
                                                <Link to={'/login'} className='link color ml-2'>Sign In</Link>
                                            </span>
                            </div>
                           
                        </div>
                            </div>
                        </div>
                        
                    </section>
                </>
            )
        }
      
    
export default SignUp;