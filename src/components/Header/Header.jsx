import React from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import './Header.scss';

const Header = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    margin: '20px 0px 0px 20px',
    width: '100px',
    height: '170px',
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    p: 1,
    bgcolor: '#444444',
    color: '#111111',
    '& button': { mt: 2 }
  };  


  return (
    <Box sx= {{display: 'flex', justifyContent: "space-between",
    alignItems: "center",  bgcolor: '#333333', width: '100vw'}}>
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box sx={{ position: 'relative', bgcolor: '#333333' }}>
        <button className="menu"type="button" onClick={handleClick}> 
          <img src="./assets/images/burgerMenu.png" alt="menu hamburguesa"/>
        </button>
        {open ? (
          <Box sx={styles} >
          <Button style={{backgroundColor: '#673ab7' }} variant="contained" size="small" onClick={() => props.setRankingToggle(false)}>
          Game
        </Button>
          <Button style={{backgroundColor: '#673ab7' }} variant="contained" size="small" onClick={() => props.setRankingToggle(true)}>
          Ranking
        </Button>
          <Button style={{backgroundColor: '#673ab7' }} variant="contained" size="small" onClick={() => props.setLoggedIn(false)}>
          Logout
        </Button>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
    <Avatar sx={{ bgcolor: deepPurple[500], m: '15px'}}>{props.playerName[0].toUpperCase()}</Avatar>
    </Box>
  )
}

export default Header