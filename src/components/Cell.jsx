import '../styles/Cell.css'

const Cell = ({children, row, column}) => {
  return (
    <div className="cell" id={'cell'+column+row}>
      {children} 
    </div>
  );
};

export { Cell };
