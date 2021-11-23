import "../styles/accounts.scss"
import "../styles/accountsCard.scss"

const AccountCard = (props) => {

        return (
            <div className = "account-card">
                <div >{"Account-number: "+props.account.account_number}</div>
                <div >{"Balance: "+props.account.available}</div>
            </div>

        )
}
export default AccountCard