import "./styles.scss";

export function DescriptionProject({ title, paragraphs, image }) {
  return (
    <div className="DescriptionProject">
      <article>
        <h4> {title}</h4>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="paragraph">
            {paragraph}
          </p>
        ))}
      </article>
      <img src={image} className="Imagem" />
    </div>
  );
}
