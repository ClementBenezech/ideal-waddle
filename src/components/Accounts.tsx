
import "../styles/accounts.scss"
import AccountCard from "./AccountCard"

const Accounts = (props:any) => {

        //Using map and the AccountCard Component, generate an array of react elements to display.
        const accountCards = Array.from(props.data).map((element:any) => {
            return (
            <AccountCard 
                    key = {element.iban} 
                    accountNumber = {element.account_number}
                    balance = {element.available}
                    currency = {element.currency}/>
            )
        })
    
        // Returning the account cards array
        return <div className = 'accounts'>
            {accountCards}
        </div>
    
    
}
export default Accounts