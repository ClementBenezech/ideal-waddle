/* Nothing much to see here, just a header with a gif logo*/

import '../styles/header.scss'
import mansaImage from '../images/mansa.gif'

const Header = () => {

    return <div className = 'header'>
        <img alt = "mansa_logo" src = {mansaImage}></img>
    </div>
}


export default Header