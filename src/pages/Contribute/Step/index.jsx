import "./styles.scss";

export function Step({ title, subtitle, icon: Icon }) {
  return (
    <div className="Step">
      <Icon size={24} weight="fill" />
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}
