import "../styles/accounts.scss"
import AccountCard from "./AccountCard"

const Accounts = (props) => {
    console.log(props.data)
    if (props.data !== null) {
        const accountCards = Array.from(props.data).map( element => {
            console.log(element)
            return <AccountCard key = {element.iban} account = {element}/>
        })
    
        return <div className = 'accounts'>
            {accountCards}
        </div>
    } else {
        return <div className = 'accounts'></div>
    }
    
    
}
export default Accounts