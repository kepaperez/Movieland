import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

import Movie from './movie';

const API_URP = 'https://www.omdbapi.com?apikey=12b6a11c';

const App = () => {
    const [movies, setMovies] = useState([]);
    const[searchTerm,setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URP}&s=${title}`);
        
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Batman');
    }, []);
    return (
        <div className='app'>
            <h1>Movieland</h1>

            <div className='search'>
                <input placeholder='Search something'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value) }
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}

                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>
    );

}

export default App;