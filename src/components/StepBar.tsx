import {RoundIconWithText} from '../components'
import { StepHeaderProps } from './../services/interfaces';
import  StepCounter  from '../components/StepCounter';

export default function StepBar(props: StepHeaderProps) {
  const selectedButton = props.buttons.filter(button => button.selected)[0];

  return (
    <div className="footer">
      <StepCounter 
        number={selectedButton.number}
        selected={selectedButton.selected}
        completed={selectedButton.completed}
        numberOfButtons={props.buttons.length}
      />
      <div className="buttons">
        <button className="previous">
          <svg width="14" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_10_294)">
              <path d="M0.586738 9.39339L3.16674 12.0001C3.22871 12.0625 3.30245 12.1121 3.38369 12.146C3.46493 12.1798 3.55206 12.1973 3.64007 12.1973C3.72808 12.1973 3.81522 12.1798 3.89646 12.146C3.97769 12.1121 4.05143 12.0625 4.1134 12.0001C4.17589 11.9381 4.22549 11.8643 4.25933 11.7831C4.29318 11.7019 4.3106 11.6147 4.3106 11.5267C4.3106 11.4387 4.29318 11.3516 4.25933 11.2703C4.22549 11.1891 4.17589 11.1154 4.1134 11.0534L1.74007 8.66672H15.3334C15.5102 8.66672 15.6798 8.59648 15.8048 8.47146C15.9298 8.34644 16.0001 8.17687 16.0001 8.00005C16.0001 7.82324 15.9298 7.65367 15.8048 7.52865C15.6798 7.40363 15.5102 7.33339 15.3334 7.33339H1.70007L4.1134 4.92006C4.2316 4.79607 4.29753 4.63135 4.29753 4.46006C4.29753 4.28876 4.2316 4.12404 4.1134 4.00006C4.05143 3.93757 3.97769 3.88797 3.89646 3.85413C3.81522 3.82028 3.72808 3.80286 3.64007 3.80286C3.55206 3.80286 3.46493 3.82028 3.38369 3.85413C3.30245 3.88797 3.22871 3.93757 3.16674 4.00006L0.586738 6.56672C0.212203 6.94172 0.00183105 7.45005 0.00183105 7.98006C0.00183105 8.51006 0.212203 9.01839 0.586738 9.39339Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_10_294">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="next">
          Dalej
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_7_123)">
              <path d="M15.4133 6.60666L12.8333 3.99999C12.7714 3.93751 12.6976 3.88791 12.6164 3.85407C12.5351 3.82022 12.448 3.8028 12.36 3.8028C12.272 3.8028 12.1849 3.82022 12.1036 3.85407C12.0224 3.88791 11.9486 3.93751 11.8867 3.99999C11.7625 4.1249 11.6928 4.29387 11.6928 4.46999C11.6928 4.64612 11.7625 4.81509 11.8867 4.93999L14.26 7.33333H0.666667C0.489856 7.33333 0.320286 7.40357 0.195262 7.52859C0.0702379 7.65361 0 7.82318 0 7.99999H0C0 8.17681 0.0702379 8.34637 0.195262 8.4714C0.320286 8.59642 0.489856 8.66666 0.666667 8.66666H14.3L11.8867 11.0733C11.8242 11.1353 11.7746 11.209 11.7407 11.2903C11.7069 11.3715 11.6895 11.4587 11.6895 11.5467C11.6895 11.6347 11.7069 11.7218 11.7407 11.803C11.7746 11.8843 11.8242 11.958 11.8867 12.02C11.9486 12.0825 12.0224 12.1321 12.1036 12.1659C12.1849 12.1998 12.272 12.2172 12.36 12.2172C12.448 12.2172 12.5351 12.1998 12.6164 12.1659C12.6976 12.1321 12.7714 12.0825 12.8333 12.02L15.4133 9.43333C15.7879 9.05833 15.9982 8.55 15.9982 8.01999C15.9982 7.48999 15.7879 6.98166 15.4133 6.60666Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_7_123">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}
