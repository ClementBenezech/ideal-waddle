import "../styles/accounts.scss"
import "../styles/accountsCard.scss"

const AccountCard = (props) => {

        return (
            <div className = "account-card">
                <div className = "account-card__label">Account Number</div>
                <div className = "account-card__value">{props.account.account_number}</div>
                <div className = "account-card__label">Balance</div>
                <div className = "account-card__value">{props.account.available+" "+props.account.currency}</div>
            </div>

        )
}
export default AccountCard