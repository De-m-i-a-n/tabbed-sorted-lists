import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector } from 'react-redux';
import setActiveTab from '../Store/actions/setActiveTab';
import arrayUniqueByKeyStatus from '../Lists/lists';
import { Outlet, Link } from "react-router-dom";

console.log('arrayUniqueByKeyStatus imported:', arrayUniqueByKeyStatus)

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setActiveTab(newValue));
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1800, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >         
        <Link to="/All"><Tab label="All Rewards" /> </Link>
        <Link to="/New"><Tab label="New Rewards" /> </Link>
        <Link to="/Redeemed"><Tab label="Redeemed Rewards" /></Link>
        <Link to="/Completed"><Tab label="Completed Rewards" /></Link>
        <Link to="/Scheduled"><Tab label="Scheduled Rewards" /></Link>
      </Tabs>
    </Box>
  );
}
