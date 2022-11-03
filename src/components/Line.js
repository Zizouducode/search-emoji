const Line = ({ results }) => {
  return results.map((elem, index) => {
    return (
      <div
        key={index}
        className="emoji"
        onClick={() => {
          navigator.clipboard.writeText(elem.symbol);
        }}
      >
        <div>
          {elem.symbol} {elem.title}
        </div>
        <div className="hidden">Click to copy !</div>
      </div>
    );
  });
};

export default Line;
