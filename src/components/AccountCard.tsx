/* Here we use the props we got from the Account component, and generate a single account card with number and balance*/

import "../styles/accounts.scss"
import "../styles/accountsCard.scss"

type AccountCardProps = {
    accountNumber: string;
    balance: number;
    currency: string
  };

const AccountCard = (props:AccountCardProps) => {

        return (
            <div className = "account-card">
                <div className = "account-card__label">Account Number</div>
                <div className = "account-card__value">{props.accountNumber}</div>
                <div className = "account-card__label">Balance</div>
                <div className = "account-card__value">{props.balance+" "+props.currency}</div>
            </div>
        
        )
}
export default AccountCard