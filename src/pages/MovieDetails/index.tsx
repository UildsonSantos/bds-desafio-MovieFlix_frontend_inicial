import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';

import ButtonIcon from 'components/ButtonIcon';
import CardReview from 'components/CardReview';
import { requestBackend } from 'util/requests';
import { Review } from 'types/Review';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [movieReviews, setMovieReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(params)
      .then((response) => {
        setMovieReviews(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <div className="movie-details-container">
        <h1>Tela detalhes do filme id: 1</h1>
        <div className="base-card card-rating-container">
          <form>
            <input placeholder="Deixe sua avaliação aqui" />

            <div>
              <ButtonIcon text="SALVAR AVALIAÇÃO" />
            </div>
          </form>
        </div>

        <div className="movie-details-reviews">
          {isLoading ? (
            <h3>Carregando...</h3>
          ) : movieReviews && movieReviews.length > 0 ? (
            movieReviews?.map((ele) => (
              <CardReview key={ele.id} review={ele}></CardReview>
            ))
          ) : (
            <h3>Este filme não possui comentários</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
