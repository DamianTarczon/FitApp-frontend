// @flow
import * as React from 'react';
import { useParams } from 'react-router-dom';
import form from '../constants/form.json';
import * as Components from '../components';
export default function Step() {
  const { step } = useParams();
  let currentStep;
  for (let i = 0; i < form.steps.length; i++) {
    if (form.steps[i].slug === step) {
      currentStep = form.steps[i];
    }
  }
  if (currentStep) {
    let content = currentStep.children.map((child) => {
      const Component = Components[child.name];
      if (Component) {
        return <Component {...child} />;
      }
    });
    return content;
  }
  return null;
}
