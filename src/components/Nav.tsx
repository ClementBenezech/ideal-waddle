//Nothing fancy to see here, just inactive navIcons*/

import "../styles/nav.scss"

const Nav = () => {

    return <div className = 'nav'>
        <i className="fas fa-coins nav__menu-item  nav__menu-item--current"></i>
        <i className="fas fa-user-alt nav__menu-item"></i>
        <i className="fas fa-sign-out-alt nav__menu-item"></i>
    </div>
}
export default Nav