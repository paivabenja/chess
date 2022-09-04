const selectCell = (isSelected, piece, pieceColor, turn, setIsCurrentCell, updateBoard, setIsSelected) => {
  if (!isSelected) {
    if (piece != '' && pieceColor === turn) {
      setIsCurrentCell(true);
    }
    updateBoard();
  } else {
    setIsCurrentCell(false);
    setIsSelected(false);
  }
};
export { selectCell };
