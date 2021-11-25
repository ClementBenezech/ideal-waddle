/* Here, we use all the data we got from the SIREN and randomUser APIs, and we display them from props*/

import '../styles/businessCard.scss'

type BusinessCardProps = {
    title: string;
    first:string;
    last:string;
    picture:string;
    legalName:string;
    siret:string;
    address:string;
    phoneNumber:string;

  };

const BusinessCard = (props:BusinessCardProps) => {
    if (props !== null) {
        return (
            <div className = "business-card">
                <div className = "business-card__name">{props.title+" "+props.last+" "+props.first}</div>
                <img className = "business-card__picture" src = {props.picture} alt = {"photo of "+props.first}/>
                {/*<div className = "business-card__company__title">Company</div>*/}
                <div className = "business-card__company__data">{props.legalName}</div>
                <div className = "business-card__company__data"><i className="fas fa-fingerprint"></i>{props.siret}</div>
                <div className = "business-card__company__data"><i className="fas fa-map-marker-alt"></i>{props.address}</div>
                <div className = "business-card__company__data"><i className="fas fa-phone-square-alt"></i>{props.phoneNumber}</div>
            </div>
            )
    } else {
        return <div>Loading</div>
    }
    
}
export default BusinessCard