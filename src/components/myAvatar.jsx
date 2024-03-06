import React from 'react';
import {AccountCircle} from "@mui/icons-material";
import {Avatar, Menu, MenuItem} from "@mui/material";
import {useSession} from "../context/SessionContext.jsx";
import {logout} from "../util/Auth.jsx";

const MyAvatar = () => {
    const {user} = useSession();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseAndLogout = async () => {
        handleClose();
        await logout();
        //     TODO: Exception Handling
    };

    return (
        <>
            {user && (
                <div>
                    <Avatar
                        size="large"
                        src={user.photoURL}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </Avatar>
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
                        <MenuItem onClick={handleCloseAndLogout}>Log out</MenuItem>
                    </Menu>
                </div>
            )}
        </>
    );
};

export default MyAvatar;