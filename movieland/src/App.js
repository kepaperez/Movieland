import  {useEffect} from 'react';
import'./App.css';
import SearchIcon from './search.svg';

//54:00

const API_URP ='https://www.omdbapi.com?apikey=12b6a11c';
const App = () =>{

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URP}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() =>{
        searchMovies('Spiderman');

    },[]);
    return(
        <div className='app'>
              <h1>Movieland</h1>

              <div className='search'>
                  <input placeholder='Search something'
                  value="Superman"
                  />
              </div>
        </div>
      
    );

}

export default App;