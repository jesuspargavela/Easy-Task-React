import "./card.css";

function Card({
  children,
  isSelected,
}: {
  children: React.ReactNode;
  isSelected: boolean;
}) {
  return (
    <div className={`card ${isSelected ? "selected" : ""}`}>{children}</div>
  );
}

export default Card;
