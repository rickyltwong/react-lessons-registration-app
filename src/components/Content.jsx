import React from 'react';
import {useSession} from "../context/SessionContext.jsx";

const Content = () => {
    const {user} = useSession();

    return (
        <div>
            {user ? <p>User is logged in</p> : <p>User is not logged in</p>}
        </div>
    );
};

export default Content;