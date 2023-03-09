function Header() {
    return(
        <div className="header">
            <img src={new URL(`../assets/Logo.png`, import.meta.url).href} className="header--logo" />
            <p className="header--text">React Course - Project</p>
        </div>
    )
}

export default Header