import { useContext } from "react";
import UserContext from "../contexts/user";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <nav>
            <h1>MyShop</h1>
            {user ? (
                <div>
                    <span>Welcome, {user.email}!</span>
                    <button onClick={() => setUser(null)}>Logout</button>
                </div>
            ) : (
                <a href="/auth/login">Login</a>
            )}
        </nav>
    );
};

export default Navbar;
