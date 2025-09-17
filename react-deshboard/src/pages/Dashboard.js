import React, { useContext, useEffect } from "react";
import DashBoardBox1 from "./DashboardBox1";
import { FaRegUserCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";
import { GiStarsStack } from "react-icons/gi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FcClock } from "react-icons/fc";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import { Chart } from "react-google-charts";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import InputLabel from '@mui/material/InputLabel';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MyContext } from "../App";
import { IoMenu } from "react-icons/io5";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {

  "backgroundColor": "transparent",

  chartArea: { width: "100%", height: "100%" },
};

const Dashboard = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showBy, setShowBy] = useState('');
  const [catBy, setCatBy] = useState('');
  const open = Boolean(anchorEl);

  const context = useContext(MyContext)
  const ITEM_HEIGHT = 48;

  useEffect(()=>{
    context.setisHideSidebarAndHeader(false);
    window.scrollTo(0,0);
  },[]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
       
        <div className="row row1 dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashBoardBox1 color={["#1da256", "#48d483"]} icon={<FaRegUserCircle />}
                grow={true} />
              <DashBoardBox1 color={["#c012e2", "#eb64fe"]} icon={<MdShoppingCart />} />
              <DashBoardBox1 color={["#2c78e5", "#60aff5"]} icon={<BsFillBagHeartFill />} />
              <DashBoardBox1 color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} />

            </div>
          </div>


          <div className="col-md-4 pl-0 topPart2">
            <div className="box graphBox">
              <div className="d-flex align-itens-center w-100 bottomEle">
                <h6 className="text-white mb-0 mt-0">Last Month</h6>
                <div className="ml-auto">
                  <Button className="ml-auto toggleIcon" onClick={handleClick}><HiOutlineDotsVertical /></Button>
                  <Menu
                    className="dropdown_menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '20ch',
                        },
                      },
                    }}
                  >
                    {/* {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))} */}

                    <MenuItem onClick={handleClose}>
                      <FcClock />Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FcClock />Last week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FcClock />Last Month
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FcClock /> Last Year
                    </MenuItem>


                  </Menu>
                </div>
              </div>

              <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
              <p>$3,787,681.00 in last month</p>

              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"180px"}
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>

          <div className="row  cardFilters mt-3">
            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>CATEGORY BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={catBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>UID</th>
                <th>product</th>
                <th>category</th>
                <th>brand</th>
                <th>price</th>
                <th>stock</th>
                <th>rating</th>
                <th>order</th>
                <th>sales</th>
                <th>action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" 
                        className="w-100"/>
                      </div>
                    </div>
                    <div className="info">
                      <h6>Tops and skirt set for Female.....</h6>
                      <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <del className="old">$21.00</del>
                  <span className="new text-danger">$21.00</span>
                </td>
                <td>30</td>
                <td>4.9(16)</td>
                <td>380</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className="secondary" color="secondary"><FaEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex tableFooter">
            <p>showing <b>12</b> of <b>60 </b>results</p>
            <Pagination count={10} color="primary" className="pagination"
            showFirstButton showLastButton/>
          </div>
        </div>
        </div>

        
    </>
   

  );


};



export default Dashboard;
