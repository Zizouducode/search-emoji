const Line = ({ results }) => {
  return results.map((elem, index) => {
    return (
      <div key={index} className="emoji">
        {elem[0]} {elem[1]}
      </div>
    );
  });
};

export default Line;
