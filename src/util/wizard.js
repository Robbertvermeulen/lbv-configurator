import structure from "../data/structure";
import Step from "./step";

const Wizard = () => {
  let step;
  let stepIndex;

  const steps =
    structure &&
    structure.map((step) => {
      return Step(step);
    });

  const getSteps = () => {
    return steps || false;
  };

  const setStep = (stepPointer) => {
    const find = (s) =>
      s.getSlug() === stepPointer || s.getId() === stepPointer;
    step = steps.find(find) || structure[0];
    stepIndex = steps.findIndex(find);
    return step || false;
  };

  const getStep = () => {
    return step || false;
  };

  const navigateToNextStep = (history) => {
    const nextStep = structure[stepIndex + 1];
    if (nextStep) history.push(`/step/${nextStep.slug}/`);
    else history.push("/overview");
  };

  return {
    getSteps,
    setStep,
    getStep,
    navigateToNextStep,
  };
};

export default Wizard;
