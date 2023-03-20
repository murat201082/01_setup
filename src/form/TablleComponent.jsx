
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { useState } from "react";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';




const initialProducts=[
    { urunNo: 301, UrunAdı: "Cep Telefonu", salary: 5400 },
    { urunNo: 302, UrunAdı: "Dizüstü Bilgisayar", salary: 4650.0 },
    { urunNo: 303, UrunAdı: "Masaüstü Bilgisayar", salary: 3545.0 },
    { urunNo: 304, UrunAdı: "Cep Telefonu", salary: 5000.0 },
    { urunNo: 305, UrunAdı: "Mac", salary: 6000.0 },
    { urunNo: 306, UrunAdı: "Cep Telefonu", salary: 7000.0 },
    { urunNo: 307, UrunAdı: "Dizüstü Bilgisayar", salary: 8000.0 },
    { urunNo: 308, UrunAdı: "Cep Telefonu", salary: 9000.0 },
    { urunNo: 309, UrunAdı: "Mac", salary: 10000.0 },
    { urunNo: 3010, UrunAdı: "Cep Telefonu", salary: 11000.0 },
    { urunNo: 3011, UrunAdı: "Dizüstü Bilgisayar", salary: 12000.0 },
    { urunNo: 3012, UrunAdı: "Mac", salary: 13000.0 },
    { urunNo: 3013, UrunAdı: "Cep Telefonu", salary: 14000.0 },
    { urunNo: 3014, UrunAdı: "Mac", salary: 15000.0 },
  ];


  
  
export default function TablleComponent() {
    const [p, setP] = useState(initialProducts);
    const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

 
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (


      
    <TableContainer  >
        <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/kozalak-manti-asama-10.webp" />
              </IconButton>
            </Tooltip>
            
          </Box>
          {auth && (
            <div>
             
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead className="bg-info">
          <TableRow>
            <TableCell >Ürün No</TableCell>
            <TableCell align="right">Ürün Adı</TableCell>
            <TableCell align="right">Fiyatı&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {p.map((product) => (
            <TableRow
              key={product.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.urunNo}
              </TableCell>
              <TableCell align="right">{product.UrunAdı}</TableCell>
              <TableCell align="right">{product.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
