const BusinessCard = (props) => {
    if (props.data !== null) {
        return <div>Individual Data</div>
    } else {
        return <div>Loading</div>
    }
    
}
export default BusinessCard