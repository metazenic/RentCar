import useScore from "../../hooks/useScore";
import Star from "../stars/Stars";
import "./styles/scoreBar.css";

export default function ScoreBar({ car }) {
  const { score, qualification, stars } = useScore(car.puntuacionPromedio);

  return (
    <div className="scoreBar">
      <div className="scoreBar__information">
        <i className="far fa-check-circle"></i>
        <p> Cancelación gratis hasta 24hs antes del retiro</p>
      </div>
      <div className="scoreBar__score">
        <div className="scoreBar__stars">
          <p>{qualification}</p>
          <Star stars={stars} />
        </div>
        <p>{score}</p>
      </div>
    </div>
  );
}
