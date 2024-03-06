import {styled} from '@mui/material/styles';
import * as React from "react";
import DrawerHeader from "./DrawerHeader.jsx";
import {useSession} from "../context/SessionContext.jsx";
import SignIn from "./SignIn.jsx";
import LessonCard from "./LessonCard.jsx";

const drawerWidth = 240;

const MainStyle = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


const Main = ({open}) => {

    const {user} = useSession();

    return (
        <>
            <MainStyle open={open}>
                <DrawerHeader/>
                {user ?
                    <>
                        <LessonCard/>
                        <LessonCard/>
                    </>
                    : <SignIn/>}


            </MainStyle>
        </>
    )
}

export default Main;
