import React from "react";

type Props = {
  state: string;
  onClick: (index: number) => void;
};

const Square = ({ state, onClick }: Props) => {
  return (
    <div className="square" onClick={() => onClick(0)}>
      <p>{state}</p>
    </div>
  );
};

export default Square;
