import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { UIContext } from '../../context/ui/UIContext';
import NextLink from "next/link";



export const Navbar = () => {
    const {openSideMenu} = useContext(UIContext)
  return (
      <AppBar position="sticky">
          <Toolbar>
              <IconButton
                  size='large'
                  edge='start'
                  onClick={openSideMenu}
              >
                  <MenuOutlinedIcon/>
              </IconButton>
              <NextLink href="/" passHref style={{textDecoration: "none", color: "#fafafa"}}>
                        <Typography variant="h6">Open Jira App</Typography>                  
              </NextLink>

          </Toolbar>
          
    </AppBar>
  )
}
