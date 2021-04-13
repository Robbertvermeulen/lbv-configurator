import React, { useContext, useState } from "react";
import { ConfigContext } from "../../context/ConfigContext";
import CollapseBox from "../CollapseBox";
import Choice from "../../components/Choice";
import choiceImage from "../../images/demo/choice-image.png";
import Form from "react-bootstrap/Form";

import { Row, Col } from "react-bootstrap";

const StepBox = ({ title, index, collapsed, part }) => {
  const [config, setConfig] = useContext(ConfigContext);
  const [open, setOpen] = useState(!collapsed);
  const [partId] = useState(part.getId());

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleChoiceClick = (optionId) => {
    setConfig({ ...config, [partId]: optionId });
  };

  const handleDropdownChange = (e) => {
    const value = parseInt(e.target.value);
    setConfig({ ...config, [partId]: value });
  };

  return (
    <CollapseBox
      className="mb-3"
      title={index + 1 + ". " + title}
      key={partId}
      collapsed={!open}
      toggleHandler={handleToggle}
    >
      <div className="mb-4">{part.getDescription()}</div>
      {part.getType() === "choice" && (
        <div className="choices">
          <Row>
            {part.getOptions().map((option, i) => (
              <Col xs="6" md="4" key={i}>
                <Choice
                  label={option.getTitle()}
                  image={choiceImage}
                  isChosen={option.getId() === config[part.getId()]}
                  clickHandler={() => handleChoiceClick(option.getId())}
                ></Choice>
              </Col>
            ))}
          </Row>
        </div>
      )}
      {part.getType() === "dropdown" && (
        <Form.Control
          as="select"
          data-part-id={part.getId()}
          value={config[part.getId()]}
          onChange={handleDropdownChange}
        >
          {part.getOptions().map((option, i) => (
            <option value={option.getId()} key={i}>
              {option.getTitle()}
            </option>
          ))}
        </Form.Control>
      )}
    </CollapseBox>
  );
};

export default StepBox;
