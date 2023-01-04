import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../../Layout/NavBar/NavBar';
import Stars from '../../Stars';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [loading,setLoading]=useState(false);
  let query = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getApiInfo();
  }, [query.id])

  const getApiInfo = async () => {
    setLoading(true)
    const url = `https://www.omdbapi.com/?i=${query.id}&apikey=f35d9868`;
    const data = await axios.get(url);
    setMovie(data.data)
    setLoading(false)
  }

  return (
    <div>
      <NavBar/>
    <div className=' d-flex align-items-center justify-content-center bg-black'>
      { loading? <img style={{height:'60px',width:'80px'}} src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'></img> :
      <div  style={{minHeight:'88vh'}} >
        <div className='container-fluid'>
          <div className='row align-items-center justify-content-center '>  
              <img src={movie.Poster} className='rounded-5 'style={{height:"350px",width:"290px"}} />
              <div className='text-white col-md-7  p-5  '>
                <h2 className='text-light '>{movie.Title}</h2>
                <div className=''>{movie.Plot}</div>
                <div className=''>Genre: {movie.Genre}</div>
                <div className=''>Actors: {movie.Actors}</div>
                <div className=''>Year: {movie.Year}</div>
                <div className=''>Score: <Stars rating= {movie.imdbRating}/></div>
                <div className=' mt-5' >
                <button className=' btn btn-outline-light ' onClick={() => navigate(-1)}>Go back</button>
                </div>
              </div>
           </div>
        </div>
      </div>
      }
    </div>
  </div>
    
  )
}

export default MovieInfo