import '../styles/Circle.css';

const Circle = ({ color }) => {
  if (color === 'red') {
    return <div className='circle red'></div>
  }
  if (color === 'black') {
    return <div className='circle'></div>
  }
};

export { Circle };
