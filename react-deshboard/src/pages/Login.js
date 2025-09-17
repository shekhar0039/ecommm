import { useContext, useEffect, useState } from 'react';
import Logo from '../assets/images/logo.webp'
import { MyContext } from '../App';
import Button from '@mui/material/Button';
import pattern from "../assets/images/pattern.webp"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';


const Login = () => {

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setisShowpassword] =useState(false)

    const context = useContext(MyContext)
    useEffect(() => {
        context.setisHideSidebarAndHeader(true);
    }, []);

    const focusInput = (index) => {
        setInputIndex(index);
    }
    return (
        <>
            <img src={pattern} className='loginPattern' />
            <section className="loginSection">
                <div className="loginBox">
                    <div className='logo text-center'>
                        <img src={Logo} width="60px" />
                        <h5 className='font-weight-bold'>Login to Hotash</h5>
                    </div>

                    <div className='wrapper mt-3 card border mb-0'>
                        <form>
                            <div className={`form-group  position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className='icon'><MdEmail /></span>
                                <input type='text' className='form-control' placeholder='enter your email' onFocus={() => focusInput(0)} 
                                onBlur={() => setInputIndex(null)}  autoFocus/>
                            </div>

                            <div className={`form-group  position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill /></span>
                                <input type={`${isShowPassword===true ? 'password' : 'text'}`} className='form-control' placeholder='enter your password' onFocus={() => focusInput(1)} 
                                onBlur={() => setInputIndex(null)} />

                                <span className='toggleShowPassword' onClick={()=>setisShowpassword(!isShowPassword)}>
                                    {
                                        isShowPassword===true ? <IoIosEyeOff/> : <IoMdEye/>
                                    }
                                  
                                </span>
                            </div>

                            <div className='form-group'>
                                <Button className='btn-blue btn-lg w-100 btn-big'>Sign In</Button>
                            </div>
                            <div className='form-group text-center'>
                                <Link to={'/forget-password'} className='link '>FORGOT PASSWORD</Link>

                                <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                    <span className='line'></span>
                                    <span className='txt'>or</span>
                                    <span className='line'></span>
                                </div>
                                <Button variant="outlined" color="primary" className='w-100 btn-lg btn-big loginWithGoogle'>SIgn In with Google</Button>
                            </div>
                        </form>
                    </div>
                    <div className='wrapper mt-3 card border footer p-3'>
                                    <span className='text-center '>
                                        Don't have an Account?
                                        <Link to={'/signUp'} className='link color ml-2'>Register</Link>
                                    </span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;
