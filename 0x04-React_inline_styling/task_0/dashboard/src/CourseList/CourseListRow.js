import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Define styles
const headerStyle = { backgroundColor: '#deb5b545' };
const defaultStyle = { backgroundColor: '#f5f5f5ab' };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  let content;

  if (isHeader) {
    if (textSecondCell === null) {
      content = <th colSpan='2'>{textFirstCell}</th>;
    } else {
      content = (
        <Fragment>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </Fragment>
      );
    }
  } else {
    content = (
      <Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }

  return (
    <tr style={isHeader ? headerStyle : defaultStyle}>
      {content}
    </tr>
  );
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
