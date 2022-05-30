import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from "../../movieState";
import Award from "../../components/Award";


const MovieDetail = () => {
    const history = useHistory();
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter(movie => movie.url === history.location.pathname)
        setMovie(currentMovie[0]);
    }, [movies, history.location.pathname])


    return (
        <>
            {movie && <StyledDetails>
                <StyledHeadLine>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt=""/>
                </StyledHeadLine>
                <StyledAwards>
                    {movie.awards.map((award, index) => {
                        return <Award key={index} title={award.title} description={award.description} />
                    })}
                </StyledAwards>
                <StyledImageDisplay>
                    <img src={movie.secondaryImg} alt=""/>
                </StyledImageDisplay>
            </StyledDetails>}
            </>
    );
};

const StyledDetails = styled.div`
  color: #fff;
`

const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`
export default MovieDetail;