import React, { useContext } from "react";
import { ConfigContext } from "../../context/ConfigContext";
import CollapseBox from "../CollapseBox";
import Choice from "../../components/Choice";
import choiceImage from "../../images/demo/choice-image.png";
import Form from "react-bootstrap/Form";

import { Row, Col } from "react-bootstrap";

const StepBox = ({ title, index, collapsed, part }) => {
  const [config] = useContext(ConfigContext);

  return (
    <CollapseBox
      className="mb-3"
      title={index + 1 + ". " + title}
      key={index}
      collapsed={collapsed}
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
