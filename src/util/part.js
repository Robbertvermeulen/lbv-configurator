import Option from "./option";

const Part = (part) => {
  const options = part.options && part.options.map((option) => Option(option));

  const getId = () => {
    return part.id || false;
  };

  const getTitle = () => {
    return part.title || false;
  };

  const getOption = (optionId) => {
    return (
      (optionId && options.find((option) => option.getId() === optionId)) ||
      false
    );
  };

  const getOptionTitle = (optionId) => {
    const option = getOption(optionId);
    return option && option.getTitle();
  };

  const getOptions = () => {
    return (
      (part.options && part.options.map((option) => Option(option))) || false
    );
  };

  const getDescription = () => {
    return part.description || false;
  };

  const getType = () => {
    return part.type || false;
  };

  return {
    getId,
    getTitle,
    getOption,
    getOptions,
    getDescription,
    getType,
    getOptionTitle,
  };
};
export default Part;
