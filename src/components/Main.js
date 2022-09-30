export default function Main(props) {
    return(
        <section className="main--section">
            <div className="top-section">
                <img className='image' src={require(`../images/${props.data.imageUrl}.jpg`)} alt='location' width='420' height='240' />
                <div className='text'>
                    <p className='location'>{props.data.location}</p>
                    <a className='link'href={props.data.googleMapsUrl}>View on Google Maps</a>
                    <h1 className='title'>{props.data.title}</h1>
                    <p className='date'>{props.data.startDate} - {props.data.endDate}</p>
                </div>
            </div>

            <div className='bottom-section'>
                <p className='description'>{props.data.description}</p>
            </div>
            <hr/>
        </section>
    )
}