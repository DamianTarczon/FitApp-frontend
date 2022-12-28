import './index.scss';

export default function StepBarButtons(props: { number: string }) {
  const style = {
    display: props.number === '1' ? 'none' : '',
  };

  return (
    <div className="buttons">
      <button className="previous" style={style}>
        <img src="/assets/icons/arrow-left.svg" alt="arrow-left"/>
      </button>
      <button className="next">
        Dalej
        <img src="/assets/icons/arrow-right.svg" alt="arrow-right"/>
      </button>
    </div>
  );
}
