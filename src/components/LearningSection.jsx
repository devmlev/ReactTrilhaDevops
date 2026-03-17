function LearningSection({ id, content }) {
  return (
    <section id={id}>
      <div className="section-head">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className="learning">
        {content.columns.map((column, columnIndex) => (
          <ul key={`column-${columnIndex}`}>
            {column.map((item, itemIndex) => (
              <li key={`${item.text}-${itemIndex}`}>
                {item.text}
                {item.children ? (
                  <ul>
                    {item.children.map((child) => (
                      <li key={child}>{child}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default LearningSection;