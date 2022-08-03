import { useState } from "react";

import { Wrap } from '../../layout.style';
import './movies.style.scss';

const Movies = () => {
    const [ movie, setMovie ] = useState([])
    const [ favoriteMovies, setFavoriteMovies ] = useState([])
    const [ searchValue, setSearchValue ] = useState('')
    const KEY = '635e34fc'

    const handleSearch = (e) => {
        const regex = /#|\s/g;
        const value = e.target.value.replace(regex, '+');
        setSearchValue(value)
    }

    const handleClick = (e) => {
        e.preventDefault()

        fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${searchValue}`)
        .then((res) => res.json())
        .then(data => setMovie(data))
        .catch(error => console.log(`There is no such title${error}`))
    }

    const addMovie = (id) => {
        const newMovie = movie.Search.find(item => item.imdbID === id)
        const isExist = favoriteMovies.find((item) => item.imdbID === id)

        if (isExist || favoriteMovies.length === 9 || !id) return

        return setFavoriteMovies([...favoriteMovies, newMovie])
    }

    const removeMovie = (id) => setFavoriteMovies([...favoriteMovies.filter((item) => item.imdbID !== id)])

    return (
        <>
            <Wrap>
                <form>
                    <label htmlFor="input-search">Search movies:</label>
                    <input type="text" name="input-search" onChange={ handleSearch }></input>
                    <button type="submit" onClick={ handleClick }>Prikazi</button>
                </form>
                <div className="movie__wrap">
                {
                    movie?.Search?.length &&
                    movie.Search.map(({ imdbID, Title, Poster }) => (
                        <div className="movie__container" key={imdbID}>
                            <div className="movie__card">
                                <h1>{Title}</h1>
                                <img src={Poster} alt={Title}></img>
                            </div>
                            <button className="movie__favorite-button" type="button" onClick={ () => addMovie(imdbID) }>Add favorite movie</button>
                        </div>
                    ))
                }
                </div>
                {
                    favoriteMovies.length ? <h1 className="favorite__title">Favorite movies:</h1> : null
                }
                <div className="movie__wrap">
                    {
                        favoriteMovies.length ?
                        favoriteMovies.map(({ imdbID, Title, Poster }) => (
                            <div className="movie__container" key={imdbID}>
                                <div className="movie__card">
                                    <h1>{Title}</h1>
                                    <img src={Poster} alt={Title}></img>
                                </div>
                                <button className="movie__favorite-button" type="button" onClick={ () => removeMovie(imdbID) }>Remove favorite movie</button>
                            </div>
                        ))
                        : null
                    }
                </div>
            </Wrap>
        </>
    )
}

export default Movies