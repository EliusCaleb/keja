import "../styles/footer.css"

function Footer() {
    return (
        <div className="footer">
          <div className="fLists">
            <ul className="fList">
              <li className="fListItem">Countries</li>
              <li className="fListItem">Hotels</li>
            </ul>
            <ul className="fList">
              <li className="fListItem">Resorts </li>
              <li className="fListItem">Villas</li>
              <li className="fListItem">Hostels</li>
              <li className="fListItem">Guest houses</li>
            </ul>
            <ul className="fList">
              <li className="fListItem">Unique places to stay </li>
              <li className="fListItem">Reviews</li>
              <li className="fListItem">Seasonal and holiday deals </li>
            </ul>
            <ul className="fList">
              <li className="fListItem">Curtomer Service</li>
              <li className="fListItem">Partner Help</li>
              <li className="fListItem">Careers</li>
              <li className="fListItem">Sustainability</li>
            </ul>
          </div>
          <div className="fText">Copyright © 2022 Keja App.</div>
        </div>
    );
}

export default Footer