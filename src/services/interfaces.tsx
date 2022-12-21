export interface StepHeaderProps {
  buttons: {
    number: string;
    text: string;
    selected: boolean;
    completed: boolean;
  }[];
}

export interface StepButtonProps {
  number: string;
  text: string;
  selected: boolean;
  completed: boolean;
}

export interface RoundIconProps {
  text: string;
  selected: boolean;
  completed: boolean;
}

export interface FormContainerProps {
  buttons: {
    value: string;
    text: string;
    selected: boolean;
  }[];
}

export interface GenderFormProps {
  buttons: {
    value: string;
    text: string;
    selected: boolean;
  }[];
}

export interface RadioSelectorProps {
  gender: string;
  text: string;
  selected: boolean;
}
