import Style from "./Style.module.css";

export default function ScoreBar({ stars }) {
  return (
    <>
      {stars.map((n) => {
        let icon =
          n == 1
            ? "fas fa-star"
            : n == 0
            ? "fas fa-star-half-alt"
            : "far fa-star";
        return <i class={`${Style.star} ${icon}`}></i>;
      })}
    </>
  );
}
