// @flow
import * as React from 'react';
import { useParams } from 'react-router-dom';
import form from '../constants/form.json';
import * as Components from '../components';
import { FormContainer, Header, StepBar, StepHeader } from '../components';
export default function Step() {
  const { step } = useParams();
  console.log(step);
  let currentStep;
  for (let i = 0; i < form.steps.length; i++) {
    if (form.steps[i].slug === step) {
      currentStep = form.steps[i];
    }
  }
  if (currentStep) {
    let content = currentStep.children.map((child) => {
      //@ts-ignore
      const Component = Components[child.name];
      if (Component) {
        return <Component {...child} />;
      }
    });
    let buttonsProps = form.stepsInfo.buttons;

    return (
      <div>
        <Header />
        <StepHeader buttons={buttonsProps} />
        <FormContainer content={content} />
        <StepBar buttons={buttonsProps} />
      </div>
    );
  }
  return <div></div>;
}
