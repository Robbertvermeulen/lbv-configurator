import structure from "../data/structure";

const Wizard = ({ stepSlug, history }) => {
  const step = structure.find((step) => step.slug === stepSlug) || structure[0];
  const stepIndex = structure.findIndex((s) => s.id === step.id);

  const getStep = () => {
    return step;
  };

  const navigateToNextStep = () => {
    const nextStep = structure[stepIndex + 1];
    if (nextStep) history.push(`/step/${nextStep.slug}/`);
    else history.push("/overview");
  };

  return {
    getStep,
    navigateToNextStep,
  };
};

export default Wizard;
