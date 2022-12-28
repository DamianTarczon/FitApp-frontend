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
    icon: string;
    text: string;
    selected: boolean;
  }[];
}

export interface AllergensFormProps {
  title: string;
  description: string;
  data: {
    form_name: string;
    value: string;
    icon: string;
    text: string;
    selected: boolean;
  }[];
}

export interface DiseasesFormProps {
  title: string;
  data: {
    form_name: string;
    value: string;
    icon: string;
    text: string;
    selected: boolean;
  }[];
}

export interface MealNumberFormProps {
  title: string;
  data: {
    form_name: string;
    value: string;
    icon: string;
    text: string;
    description: string;
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
  form_name: string;
  value: string;
  icon: string;
  text: string;
  selected: boolean;
  isLast?: boolean;
}

export interface BigRadioSelectorProps {
  form_name: string;
  value: string;
  icon: string;
  text: string;
  description: string;
  selected: boolean;
}

export interface SelectorProps {
  form_name: string;
  values: string[];
  unit: string;
  text: string;
  selected: boolean;
}

export interface StepCounterProps {
  number: string;
  selected: boolean;
  completed: boolean;
  numberOfButtons: number;
}

export interface DescriptionProps {
  text: string;
  title: string;
  trainings: {
    number: string;
    shortDescription: string;
  };
  video: string;
}

export interface TypeButtonProps {
  form_name: string;
  icon: string;
  selected: boolean;
  text: string;
  trainings: {
    number: string;
    shortDescription: string;
  };
  value: string;
}

export interface ButtonProps{
  value: string;
  icon: string;
  text: string;
  selected: boolean;
  trainings: {
    number: string;
    shortDescription: string;
  };
  description: {
    title: string;
    description: string;
    video: string;
  };
}

export interface DietTypeAndActivityFormProps {
  name: string;
  title: string;
  data: ButtonProps[]
}
