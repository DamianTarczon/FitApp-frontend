import React from 'react';
import './BigTile.scss';

interface BigTileProps {
  color: string;
  content: any;
}

export default function BigTile(props: BigTileProps) {
  return (
    <div className="big-tile" style={{ backgroundColor: props.color }}>
      {props.content}
    </div>
  );
}
