// Material ui example for side menu
import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useRouter } from "next/router";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const leftMenu = [{title:"solomon4_1", path:"/solomon04/test/func"},
                  {title:"solomon4_2", path:"/solomon04/test/ChooseType"},
                  {title:"solomon4_3", path:"/solomon04/test/func"},
                  {title:"solomon4_4", path:"/solomon04/test/func"},
]
export default function sideNavBar() {
    const router = useRouter();
    const classes = useStyles();
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

    const selectMenu = (navName, navPath) => (event) => {
      console.log("ggova navName ===="+ navName)
      console.log("ggova navPath ===="+ navPath)
      
      console.log("ggovaEvent ===="+ event.type)
      for (var key in event) {
          console.log("key: " + key + " / " + event[key])
      }
      router.push(navPath);
    }
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor)}
        onKeyDown={toggleDrawer(anchor)}
      >
        <List>
          {leftMenu.map((text, index) => (
            <ListItem button key={text.title} onClick={selectMenu(text.title, text.path)}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemIcon><ChevronRightIcon/></ListItemIcon>
              <ListItemText primary={text.title} 
                
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    return (
      <div>
        {/* {['left', 'right', 'top', 'bottom'].map((anchor) => ( */}
        {['left'].map((anchor) => (
          <div key={anchor}>
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}Side Menu</Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
                </Drawer>
            </ButtonGroup>
          </div>
        ))}
      </div>
    );
  }