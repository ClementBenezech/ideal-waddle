import "../styles/nav.scss"

const Nav = () => {

    return <div className = 'nav'>
        <i class="fas fa-coins nav__menu-item  nav__menu-item--current"></i>
        <i class="fas fa-user-alt nav__menu-item"></i>
        <i class="fas fa-sign-out-alt nav__menu-item"></i>
    </div>
}
export default Nav