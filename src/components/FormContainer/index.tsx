import { useEffect, useState } from 'react';
import './index.scss';
import { GenderForm } from '../../components';
import { FormContainerProps } from '../../services/interfaces';
import { desktopBackgroundList, mobileBackgroundList } from '../../assets/backgrounds';

export default function FormContainer({ buttons }: FormContainerProps) {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [randomInt, setRandomInt] = useState<number>(1);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    setRandomInt(getRandomInt(3));
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 576;
  const background: string = isMobile ? mobileBackgroundList[randomInt] : desktopBackgroundList[randomInt];
  const style = {
    backgroundImage: `url(${background})`,
    color: 'red',
  };

  return (
    <div className="form-container" style={style}>
      <GenderForm buttons={buttons} />
    </div>
  );
}
