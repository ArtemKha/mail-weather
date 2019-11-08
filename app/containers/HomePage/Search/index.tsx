import React from 'react';
import { Select } from 'antd';
import { City } from 'containers/App/types';

const { Option } = Select;

interface Props {
  options: City[];
}
const Search: React.FC<Props> = ({ options }) => {
  function filterOption(input, option) {
    return (
      option.props
        .children!.toString()
        .toLowerCase()
        .indexOf(input.toLowerCase()) >= 0
    );
  }

  return (
    <>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        // onChange={onChange}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        filterOption={filterOption}
      >
        {options.map(city => (
          <Option key={city.name} value={city.name}>
            {city.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default Search;
