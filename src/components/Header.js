import logo from '../images/Vector__White.svg'
function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="Лого" />
        </header>
    )
}

export default Header