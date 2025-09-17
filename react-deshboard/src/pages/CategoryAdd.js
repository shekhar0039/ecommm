import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useState } from "react";
import { postData } from "../api";

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

const Upload = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    images: [], 
    color: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Special handler for adding image URLs
  const addImgUrl = (e) => {
    const value = e.target.value;
    setFormFields((prev) => ({
      ...prev,
      images: [value], // keep as array, can extend this to multiple
    }));
  };

  const addCategory = (e) => {
    e.preventDefault();

    postData("/api/category", formFields).then((res) => {
      console.log("✅ Response:", res);
    });
  };

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4 res-col">
        <h5 className="mb-0">Add Category</h5>
        <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
          <StyledBreadcrumb
            component="a"
            href="/dashboard"
            label="Dashboard"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb
            component="a"
            href="/categoryAdd"
            label="Category"
            icon={<ExpandMoreIcon fontSize="small" />}
          />
        </Breadcrumbs>
      </div>

      <form className="form" onSubmit={addCategory}>
        <div className="row">
          <div className="col-sm-9">
            <div className="card p-4">
              <h5 className="mb-4">Basic Information</h5>

              <div className="form-group">
                <h6>Category Name</h6>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={changeInput}
                />
              </div>

              <div className="form-group">
                <h6>Image Url</h6>
                <input
                  type="text"
                  className="form-control"
                  name="images"
                  onChange={addImgUrl} // 🔹 use special handler
                />
              </div>

              <div className="form-group">
                <h6>Color</h6>
                <input
                  type="text"
                  className="form-control"
                  name="color"
                  onChange={changeInput}
                />
              </div>

              <Button type="submit" className="btn-blue btn-lg btn-big mt-3">
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
