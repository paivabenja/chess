import '../styles/Circle.css';

const Circle = ({ red }) => {
  if (red) {
    return <div className="circle red"></div>;
  } else if (!red) {
    return <div className="circle"></div>;
  }
};

export { Circle };
