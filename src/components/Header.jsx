function Header() {
    return(
        <header className="header">
            <img 
                src={new URL(`../assets/troll-face.png`, import.meta.url).href} 
                className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project</h4>
        </header>
    )
}

export default Header