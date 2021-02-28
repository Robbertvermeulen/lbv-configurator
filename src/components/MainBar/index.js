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
  const wizard = Wizard({ stepSlug: slug, history });
  const step = wizard.getStep();

  const handleNextButtonClick = () => {
    wizard.navigateToNextStep();
  };

  const handleChoiceClick = (partId, optionId) => {
    if (partId && optionId) setConfig({ ...config, [partId]: optionId });
  };

  const handleDropDownChange = (e) => {
    const partId = e.target.getAttribute("data-part-id");
    const optionId = e.target.value;
    if (partId && optionId) setConfig({ ...config, [partId]: optionId });
  };

  let collapseBoxes = [];
  if (step.parts) {
    step.parts.forEach((part, index) => {
      let title = index + 1 + ". " + part.title;
      if (part.options) {
        collapseBoxes.push(
          <CollapseBox className="mb-3" title={title} key={index}>
            <div className="mb-4">{part.description}</div>
            {part.type === "choice" && (
              <div className="choices">
                <Row>
                  {part.options.map((option, i) => (
                    <Col xs="6" md="4" key={i}>
                      <Choice
                        label={option.title}
                        image={choiceImage}
                        isChosen="true"
                        onClick={() => handleChoiceClick(part.id, option.id)}
                      ></Choice>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {part.type === "dropdown" && (
              <Form.Control
                as="select"
                onChange={handleDropDownChange}
                data-part-id={part.id}
              >
                {part.options.map((option, i) => (
                  <option value={option.id} key={i}>
                    {option.title}
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
        <h1 className="h3">{step.title}</h1>
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
