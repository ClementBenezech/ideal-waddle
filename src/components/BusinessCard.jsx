import '../styles/businessCard.scss'

const BusinessCard = (props) => {
    if (props.data !== null) {
        return (
            <div className = "business-card">
                <div className = "business-card__name">{props.title+" "+props.last+" "+props.first}</div>
                <div className = "business-card__company__title">Company</div>
                <div className = "business-card__company__data">{props.legalName}</div>
                <div className = "business-card__company__data">{props.siret}</div>
                <div className = "business-card__company__data">{props.address}</div>
            </div>
            )
    } else {
        return <div>Loading</div>
    }
    
}
export default BusinessCard