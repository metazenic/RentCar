import Galery from "./Galery";
import Features from "./Features";
import Description from "./Description";
import IconBar from "./IconBar";
import Policies from "./Policies";
import NameBar from "./NameBar";
import ScoreBar from "./ScoreBar";
import BlockMap from "./BlockMap";
import Calendar from "./Calendar";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import Spinner from "../spinner/Spinner";

export default function ProductPage(props) {
  const { id } = useParams();
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);
  const { info, isLoaded } = useFetch(`/Producto/buscar/${id}`);

  return (
    <div className="productPage" data-testid="test-container-productPage">
      {isLoaded ? (
        <>
          <NameBar car={info} />
          <ScoreBar car={info} />
          <IconBar />
          <Galery car={info} />
          <Description car={info} />
          <Features car={info} />
          <Calendar car={info} />
          <BlockMap car={info} />
          <Policies />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
