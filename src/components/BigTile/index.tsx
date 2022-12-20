import React from 'react';
import './index.scss';

interface BigTileProps {
  color: string;
  content: any;
}

export default function Index(props: BigTileProps) {
  return (
    <div className="big-tile" style={{ backgroundColor: props.color }}>
      {props.content}
    </div>
  );
}
