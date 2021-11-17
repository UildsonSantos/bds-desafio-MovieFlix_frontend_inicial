import ButtonIcon from 'components/ButtonIcon';
import CardReview from 'components/CardReview';

import './styles.css';

const MovieDetails = () => {
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
          <CardReview username="Bob" comment="Melhor filme do ano" />
          <CardReview
            username="Ana"
            comment="Gostei muito do final do filme, quando será que vai sair a continuação"
          />
          <CardReview
            username="Maria"
            comment="Hahahah ...também gostei, o próximo será uma loucuraaa"
          />
          <CardReview
            username="Alex"
            comment="Esse merece ser uma serie ...pra gente maratonar heheheh"
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
