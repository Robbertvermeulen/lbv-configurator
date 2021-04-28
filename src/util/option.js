const Option = (option) => {
  const getId = () => {
    return option.id || false;
  };

  const getTitle = () => {
    return option.title || false;
  };

  const getInfo = () => {
    return option.info || false;
  };

  return {
    getId,
    getTitle,
    getInfo,
  };
};

export default Option;
