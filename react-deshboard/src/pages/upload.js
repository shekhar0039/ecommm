import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaCloudUploadAlt, FaRegImage } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Upload = () => {
  const [categoryVal, setCategoryVal] = useState("");
  const [subCategoryVal, setSubCategoryVal] = useState("");
  const [isFeatured, setIsFeatured] = useState("");
  const [rams, setRams] = useState([]);
  const [ratingsValue, setRatingValue] = useState(1);

  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
  };

  const handleChangeSubCategory = (event) => {
    setSubCategoryVal(event.target.value);
  };

  const handleChangeFeatured = (event) => {
    setIsFeatured(event.target.value);
  };

  const handleChangeRams = (event) => {
    const {
      target: { value },
    } = event;
    setRams(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="right-content w-100">
      {/* Header */}
      <div className="card shadow border-0 w-100 flex-row p-4 res-col">
        <h5 className="mb-0">Product Upload</h5>
        <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
          <StyledBreadcrumb
            component="a"
            href="/dashboard"
            label="Dashboard"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb
            component="a"
            href="/products/upload"
            label="Products Upload"
            icon={<ExpandMoreIcon fontSize="small" />}
          />
        </Breadcrumbs>
      </div>

      {/* Form */}
      <form className="form">
        <div className="row">
          <div className="col-sm-9">
            <div className="card p-4">
              <h5 className="mb-4">Basic Information</h5>

              {/* Title */}
              <div className="form-group">
                <h6>TITLE</h6>
                <input type="text" className="form-control" />
              </div>

              {/* Description */}
              <div className="form-group">
                <h6>DESCRIPTION</h6>
                <textarea rows={5} cols={20} className="form-control" />
              </div>

              {/* Category Row */}
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <h6>CATEGORY</h6>
                    <Select
                      value={categoryVal}
                      displayEmpty
                      onChange={handleChangeCategory}
                      inputProps={{ "aria-label": "category" }}
                      className="w-100"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="MEN">MEN</MenuItem>
                      <MenuItem value="WOMEN">WOMEN</MenuItem>
                      <MenuItem value="KIDS">KIDS</MenuItem>
                    </Select>
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <h6>SUB CATEGORY</h6>
                    <Select
                      value={subCategoryVal}
                      displayEmpty
                      onChange={handleChangeSubCategory}
                      inputProps={{ "aria-label": "subcategory" }}
                      className="w-100"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Jeans">Jeans</MenuItem>
                      <MenuItem value="Shirts">Shirts</MenuItem>
                    </Select>
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <h6>PRICE</h6>
                    <input type="text" name="price" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <h6>OLD PRICE</h6>
                    <input
                      type="text"
                      name="oldPrice"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <h6 className="text-uppercase">Is Featured</h6>
                    <Select
                      value={isFeatured}
                      displayEmpty
                      onChange={handleChangeFeatured}
                      inputProps={{ "aria-label": "isFeatured" }}
                      className="w-100"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="true">True</MenuItem>
                      <MenuItem value="false">False</MenuItem>
                    </Select>
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <h6>PRODUCT STOCK</h6>
                    <input
                      type="text"
                      name="countInStock"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              {/* Discount + RAMs */}
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <h6>BRANDS</h6>
                    <input
                      type="text"
                      name="discount"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <h6>DISCOUNT</h6>
                    <input
                      type="text"
                      name="discount"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <h6>PRODUCT RAMS</h6>
                    <Select
                      multiple
                      value={rams}
                      onChange={handleChangeRams}
                      displayEmpty
                      className="w-100"
                      MenuProps={MenuProps}
                    >
                      <MenuItem value="4GB">4GB</MenuItem>
                      <MenuItem value="8GB">8GB</MenuItem>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="row">
                <div className="form-group">
                  <h6>RATINGS</h6>
                  <Rating
                    name="simple-controlled"
                    value={ratingsValue}
                    onChange={(event, newValue) => {
                      setRatingValue(newValue);
                    }}
                  />
                </div>
              </div>

              {/* Images */}
              <div className="card p-4 mt-0">
                <div className="imagesUploadSec">
                  <h5 className="mb-4">Media And Published</h5>

                  <div className="imgUploadBox d-flex align-items-center">
                    <div className="uploadBox d-flex">
                      
                      <div className="box">
                        <span className="remove">
                        <IoCloseSharp />
                      </span>
                        <LazyLoadImage
                          alt="image"
                          effect="blur"
                          className="w-100"
                          src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                        />
                      </div>

                      
                      
                      
                      <div className="uploadBox mt-4">
                      <input type="file" multiple name="images" />
                      <div className="info">
                        <FaRegImage />
                        <h6>Image Upload</h6>
                      </div>
                    </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Submit */}
              <Button className="btn-blue btn-lg btn-big mt-3">
                <FaCloudUploadAlt /> PUBLISH AND VIEW
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

console.log("✅ ProductUpload mounted");

export default Upload;
