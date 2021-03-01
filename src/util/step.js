import Part from "./part";

const Step = (step) => {
  const getParts = () =>
    step.parts &&
    step.parts.map((part) => {
      return Part(part);
    });

  const getId = () => {
    return step.id || false;
  };

  const getSlug = () => {
    return step.slug || false;
  };

  const getTitle = () => {
    return step.title || false;
  };

  return {
    getId,
    getSlug,
    getTitle,
    getParts,
  };
};

export default Step;
