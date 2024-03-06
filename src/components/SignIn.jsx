import GoogleButton from "react-google-button";
import {logout, signInWithGoogle} from "../util/Auth.jsx";
import {useSession} from "../context/SessionContext.jsx";


const SignIn = () => {
    const {user, loading, error} = useSession();

    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (user) {
        return (
            <div>
                <p>Hi {user.displayName}! You&apos;re Logged in!</p>
                <button onClick={logout}>Log out</button>
            </div>
        );
    }
    return (
        <GoogleButton onClick={signInWithGoogle}>Log in With Google</GoogleButton>
    );
};

export default SignIn;
