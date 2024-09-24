
import './App.css';
import Banner from './components/banner';
import Poster from './components/poster';
import EpiComp from './components/EpiComp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EpisodeDetails from './components/episodeDetails';



function App() {
  
  return (
  
  <Router>
    <Routes>
      <Route path='/'
      element={
        <div className="bg-black min-h-screen text-white">
      
    <Banner></Banner>
    <Poster></Poster>
    <EpiComp/>
    </div>
      }></Route>

          
          <Route path="/episodeDetails" element={ 
             <div className="bg-black min-h-screen text-white text-center pt-64 ">
      

            <EpisodeDetails></EpisodeDetails>
            </div>
          }> </Route>

    </Routes>



        
    </Router>

  );
}

export default App;
