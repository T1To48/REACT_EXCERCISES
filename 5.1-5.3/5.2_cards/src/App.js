import './App.css';
import TouristCard from './Components/TouristCard';
function App() {
  return (
    <div>
      <TouristCard
      picLink="https://img.freepik.com/free-photo/view-new-york-city-usa_53876-160509.jpg?w=1060&t=st=1676296668~exp=1676297268~hmac=3ee336e46e70341fae0ea3c51eafc38173141395fa2c58b183629360571f7a07"
      alternative="pic 1"
      title="germany"
      description="beautiful place"
      href1="#"
      href2="#"
      href3="#"
      linkContent1="berlin"
      linkContent2="dortmund"
      linkContent3="bochum"
      />
      <TouristCard
      picLink="https://img.freepik.com/free-photo/view-new-york-city-usa_53876-160509.jpg?w=1060&t=st=1676296668~exp=1676297268~hmac=3ee336e46e70341fae0ea3c51eafc38173141395fa2c58b183629360571f7a07"
      alternative="pic 2"
      title="london"
      description="beautiful place"
      href1="#"
      href2="#"
      href3="#"
      linkContent1="berlin"
      linkContent2="dortmund"
      linkContent3="bochum"
      />
      <TouristCard
      picLink="https://cdn.pixabay.com/photo/2016/12/21/00/36/woman-1921883_960_720.jpg"
      alternative="pic 3"
      title="america"
      description="beautiful place"
      href1="#"
      href2="#"
      href3="#"
      linkContent1="berlin"
      linkContent2="dortmund"
      linkContent3="bochum"
      />
    </div>
  );
}

export default App;
