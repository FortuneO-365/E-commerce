
// interface Props {}

function  Header () {
    // const {} = props

    return (
        <header>
            <nav className=" flex justify-between items-center border-b-2">
                <div>

                </div>
                <div className="logo">
                    <h1>Shoppix</h1>
                </div>
                <ul className="nav-links">
                    <li><p>Products</p></li>
                    <li><p>About</p></li>
                </ul>
                <ul>
                    <li>Login</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
