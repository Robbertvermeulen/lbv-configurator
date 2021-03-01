const Option = (option) => {
  const getId = () => {
    return option.id || false;
  };

  const getTitle = () => {
    return option.title || false;
  };

  return {
    getId,
    getTitle,
  };
};

export default Option;
