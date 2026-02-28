import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import me1 from '../assets/meabi.png';
import opan1 from '../assets/opanmrk1.png';
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';  

const pages = ['Home', 'About', 'Skill','Project','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // 👉 Changed: scroll instead of navigate
  // const handleNavClick = (page) => {
  //   const id = page.toLowerCase();
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   handleCloseNavMenu();
  // };
  
  //footer section ah input pannura method

  const handleNavClick = (page) => {
  const id = page.toLowerCase(); // "Contact" → "contact"
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  handleCloseNavMenu();
};


  return (
    <AppBar sx={{bgcolor:'black'}} >
      {/* <Container maxWidth="xl" className="relative bg-gray-950 lg:w-full md:h-[100px] py-4"> */}
      <Container maxWidth="xl" className="relative bg-black lg:w-full md:h-[100px] py-4">

        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr:2,
              display: { xs: 'flex', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <img src={me1} className="h-10 w-18 md:h-15 md:w-38" alt="abi1" />
          </Typography>

         {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, pl: 13 }}> */}
         <Box
  sx={{
    display: { xs: 'flex', md: 'none' },
    justifyContent: 'flex-end',
    flexGrow: 1,
    pr: { xs: 1, sm: 2, md: 0 } // right padding for mobile/tablet
  }}
>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              {/* <MenuIcon /> */}
              <img src={opan1} className='h-6 w-7' alt="ops" />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page}  onClick={() => handleNavClick(page)}>
                  <Typography  className="text-sm cursor-pointer hover:text-yellow-100 text-yellow-600 mx-2 px-2" >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },ml:'395px'}} >
            {pages.map((page) => (
              <p
                key={page}
                onClick={() => handleNavClick(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className="text-sm cursor-pointer hover:text-yellow-100 text-yellow-400 mx-2 px-2"
              >
                {page}
              </p>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;