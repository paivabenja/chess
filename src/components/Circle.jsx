import '../styles/Circle.css';

const Circle = ({ column, row }) => {
  return (
    <div id={'circle' + column + row} className="circle">
    </div>
  );
};

export { Circle };
