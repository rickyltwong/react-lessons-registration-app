import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Paper} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const FixedBottomNavigation = () => {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    return (
        <Box sx={{pb: 7}} ref={ref}>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Lessons" icon={<SchoolIcon/>}/>
                    <BottomNavigationAction label="My Bookings" icon={<LibraryBooksIcon/>}/>
                </BottomNavigation>
            </Paper>
        </Box>
    );
}

export default FixedBottomNavigation;

