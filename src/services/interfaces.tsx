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
  title: string;
  data: {
    form_name: string;
    value: string;
    text: string;
    selected: boolean;
  }[];
}

export interface BasicInfoFormProps {
  title: string;
  description: string;
  data: {
    form_name: string;
    value: string[];
    unit: string;
    text: string;
    selected: boolean;
  }[];
}

export interface RadioSelectorProps {
    form_name: string,
    value: string,
    text: string,
    selected: boolean,
}

export interface SelectorProps {
  form_name: string,
  values: string[],
  unit: string,
  text: string,
  selected: boolean,
}

export interface StepCounterProps{
    number: string,
    selected: boolean,
    completed: boolean,
    numberOfButtons: number
}
