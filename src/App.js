import requests from './request';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import { Nav } from './Nav';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
    
       <Row title="NETFLIX ORGINALS" 
       fetchUrl={requests.fetchNetflixOrginals}
       isLargeRow={true}
       />
       <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
       <Row title="Action Packed" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
