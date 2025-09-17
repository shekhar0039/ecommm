// Products.js
import React, { useState } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const Products = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState('');
  const [catBy, setCatBy] = useState('');
  const [filters, setFilters] = useState({
    showBy: "",
    catBy: "",
  });

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const productList = new Array(12).fill(null).map((_, index) => ({
    uid: index + 1,
    image: "https://mironcoder-hotash.netlify.app/images/product/01.webp",
    name: "Tops and skirt set for Female.....",
    desc: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
    category: "womans",
    brand: "richman",
    priceOld: "$21.00",
    priceNew: "$21.00",
    stock: 30,
    rating: "4.9(16)",
    order: 380,
    sales: "$38k",
  }));
  const paginatedList = productList.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4 align-items-center">
        <h5 className="mb-0">Product List</h5>
        <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
          <StyledBreadcrumb
            component="a"
            href="/dashboard"
            label="Dashboard"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb
            // component="a"
            // href="/products"
            label="Products"
            deleteIcon={<ExpandMoreIcon />}
          />
        </Breadcrumbs>
      </div>
      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">Best Selling Products</h3>

        <div className="row cardFilters mt-3">
          <div className="col-md-3">
            <h4>SHOW BY</h4>
            <FormControl size="small" className="w-100">
              <Select
                value={filters.showBy}
                onChange={(e) => setFilters({ ...filters, showBy: e.target.value })}
                displayEmpty
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
                <MenuItem value="30">Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="col-md-3">
            <h4>CATEGORY BY</h4>
            <FormControl size="small" className="w-100">
              <Select
                value={filters.catBy}
                onChange={(e) => setFilters({ ...filters, catBy: e.target.value })}
                displayEmpty
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
                <MenuItem value="30">Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>UID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Order</th>
                <th>Sales</th>
                <th>Action</th>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
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
                          className="w-100" />
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
                    <Link to='/products/details'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                    </Link>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><RiDeleteBin6Fill /></Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="d-flex tableFooter justify-content-between">
            <p>
              Showing <b>{itemsPerPage}</b> of <b>{productList.length}</b> results
            </p>
            <Pagination count={Math.ceil(productList.length / itemsPerPage)} page={page} onChange={handleChangePage} showFirstButton showLastButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
