import React from 'react';

const Dropdown = ({ values }) => {
	return (
		<select style={dropdownStyle}>
			{
				values.map((value, index) => {
					return <option value={value}>{value}</option>;
				})
			}
		</select>
	);
}

const dropdownStyle = {
	width: "100px",
	height: "25px",
	"margin-right": "20px"
};

export { Dropdown };