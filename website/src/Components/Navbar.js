/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Profiler, useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2, BsChatDots, BsHouse, BsInfoCircle, BsPerson } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { FaComment, FaHeart, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate('/order');
  }

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      link: "/about"
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      link: "/testimonials"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/contact"
    },
    // {
    //   text: "Profile",
    //   icon: <PermIdentityIcon/>,
    //   link: "/Profile"
    // },
    {
      text: "Favourite Order",
      icon: <FavoriteIcon />,
      link: "/favourite"
    },
    {
      text: "Feedback",
      icon: <FeedbackIcon />,
      link: "/feedback"
    },
  ];


  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
      <Link to="/">
          <BsHouse className="navbar-home-icon" />
        </Link>
        <Link to="/about">
          <BsInfoCircle className="navbar-about-icon" />
        </Link>
        <Link to="/testimonials">
          <FaComment className="navbar-testimonials-icon" />
        </Link>
        <Link to="/contact">
          <FaPhone className="navbar-contact-icon" />
        </Link>
        {/* <Link to="/Profile">
          <BsPerson className="navbar-cart-icon" />
        </Link> */}
        <Link to="/favourite">
          <FaHeart className="navbar-favourite-icon" />
        </Link>
        <Link to="/feedback">
          <BsChatDots className="navbar-feedback-icon" />
        </Link>
        <button className="primary-button" onClick={handleOrderNowClick} >Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
