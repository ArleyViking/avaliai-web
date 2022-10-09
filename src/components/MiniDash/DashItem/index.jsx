import "./styles.scss";

export function DashItem({ value, label }) {
  return (
    <div className="DashItem">
      <h4>{value}</h4>
      <p>{label}</p>
    </div>
  );
}
