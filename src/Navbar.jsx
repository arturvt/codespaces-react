import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function Navbar() {
  const [value, setValue] = React.useState(2);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const handleChange = (event) => {
  //   console.log('event');
  // }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
      centered
    >
      <Tab label="Home" component={Link} to={'/'} />
      <Tab label="Clock" component={Link} to="/clock" />
      <Tab label="Info" component={Link} to={'/info'} />
    </Tabs>
  );
}

export default Navbar;
