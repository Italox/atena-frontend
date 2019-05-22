import React, { Fragment } from "react";
import PropTypes from "prop-types";
import StyledAccordion from "./style";

const renderItem = ({ content, awnser }, index) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="javascript:;" className="accordion__item" key={index}>
    <span className="accordion__link">
      {content}
      <i className="fas fa-sort-down" />
    </span>
    <div className="accordion_content">
      <p>{awnser}</p>
    </div>
  </a>
);

const renderItems = data =>
  data && data.map((item, index) => renderItem(item, index));

const Accordion = ({ data }) => (
  <StyledAccordion>
    <Fragment>{renderItems(data)}</Fragment>
  </StyledAccordion>
);

renderItem.propTypes = {
  content: PropTypes.string.isRequired,
  awnser: PropTypes.string.isRequired,
  index: PropTypes.string
};

Accordion.propTypes = {
  data: PropTypes.array.isRequired
};

export default Accordion;
