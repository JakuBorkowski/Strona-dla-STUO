import logo from '../multimedia/logo.png'

function Header() {
    return(
        <header>
            <img className='logo' src={logo} alt='logo'/>
            <p>Signum Temporis</p>
        </header>
    )
}
export default Header