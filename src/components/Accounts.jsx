
import "../styles/accounts.scss"
import AccountCard from "./AccountCard"

const Accounts = (props) => {

        //Using map and the AccountCard Component, generate an array of react elements to display.
        const accountCards = Array.from(props.data).map( element => {
            return <AccountCard key = {element.iban} account = {element}/>
        })
    
        // Returning the account cards array
        return <div className = 'accounts'>
            {accountCards}
        </div>
    
    
}
export default Accounts