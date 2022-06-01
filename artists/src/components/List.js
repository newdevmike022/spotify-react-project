const List = ({ artist }) => {
  return (
    <>
      {artist.map((performer) => {
        const { id, name, streams, image } = performer;
        return (
          <article key={id} className="performer">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p className="stream">
                <strong>Streams: </strong>
                <span className="number">{streams}</span>
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
