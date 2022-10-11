import "./styles.scss";

export function HeaderSectionChecklist({
  title,
  subtitle,
  icon: Icon,
  variant = "fill",
}) {
  return (
    <div className="text-section">
      <div className="title-icon">
        <div className="Icon">
          <Icon weight={variant} />
        </div>
        <h3 className="title">{title}</h3>
      </div>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}
