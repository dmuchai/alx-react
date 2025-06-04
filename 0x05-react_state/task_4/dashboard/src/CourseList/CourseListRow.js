import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // New state to track if checkbox is checked (only relevant for simple rows)
  const [isChecked, setIsChecked] = useState(false);

  // Styles
  const rowStyle = isChecked ? { backgroundColor: '#e6e4e4' } : {};

  // Handler when checkbox changes
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Render header row with 1 or 2 cells
  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }

  // Render normal row with checkbox and cells
  return (
    <tr style={rowStyle}>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {' '}
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
