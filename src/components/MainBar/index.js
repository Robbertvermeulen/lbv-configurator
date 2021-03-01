import React, { useContext } from "react";
import { ConfigContext } from "../../context/ConfigContext";
import { useParams, useHistory } from "react-router-dom";
import Wizard from "../../util/wizard";
import CollapseBox from "../../components/CollapseBox";
import Choice from "../../components/Choice";
import choiceImage from "../../images/demo/choice-image.png";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainBar = () => {
  const [config, setConfig] = useContext(ConfigContext);
  const history = useHistory();
  let { slug } = useParams();
  const wizard = Wizard();
  const step = wizard.setStep(slug);

  const handleNextButtonClick = () => {
    wizard.navigateToNextStep(history);
  };

  const handleChoiceClick = (partId, optionId) => {
    if (partId && optionId)
      setConfig((prevState) => ({
        ...prevState,
        [partId]: parseInt(optionId),
      }));
  };

  const handleDropDownChange = (e) => {
    const partId = e.target.getAttribute("data-part-id");
    const optionId = e.target.value;
    if (partId && optionId)
      setConfig((prevState) => ({
        ...prevState,
        [partId]: parseInt(optionId),
      }));
  };

  let collapseBoxes = [];
  if (step.getParts()) {
    step.getParts().forEach((part, index) => {
      if (part.getOptions()) {
        collapseBoxes.push(
          <CollapseBox
            className="mb-3"
            title={index + 1 + ". " + part.getTitle()}
            key={index}
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
                        onClick={() =>
                          handleChoiceClick(part.getId(), option.getId())
                        }
                      ></Choice>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {part.getType() === "dropdown" && (
              <Form.Control
                as="select"
                onChange={handleDropDownChange}
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
      }
    });
  }

  return (
    <>
      <header className="mb-4 d-flex justify-content-center d-lg-block">
        <h1 className="h3">{step.getTitle()}</h1>
      </header>
      <section>{collapseBoxes}</section>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <button
            className="button button--primary button--block mb-5"
            onClick={handleNextButtonClick}
          >
            Next step &raquo;
          </button>
        </Col>
      </Row>
    </>
  );
};

export default MainBar;
