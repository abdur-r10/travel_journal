import globe from '../images/globe-icon.jpg'
export default function Header() {
    return(
        <section className="header--section">
        <img src={globe} alt='globe' width='50px' height='50px'/>
        <h1>MyTravelJournal</h1>
        </section>
    )
}
