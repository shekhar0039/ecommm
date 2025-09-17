import { useEffect } from "react";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FcClock } from "react-icons/fc";

// const options = ["view", "view1", "view3"]

const DashBoardBox1 = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Button className="dashboardBox" style={{
            backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
        }}>

            {
                props.grow === true ?

                    <span className="chart"><TrendingUpIcon /></span>

                    :
                    <span className="chart"><TrendingDownIcon /></span>
            }

            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white">Total User</h4>
                    <span className="text-white">277</span>
                </div>

                <div className="ml-auto">
                    {
                        props.icon ?
                            <span className="icon">
                                {props.icon ? props.icon : ''}
                            </span>
                            :

                            ''
                    }
                </div>
            </div>

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

        </Button>
    )
}
export default DashBoardBox1;