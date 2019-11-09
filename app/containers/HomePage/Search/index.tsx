import React from 'react';
import { Select } from 'antd';
import { City } from 'containers/App/types';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

const { Option } = Select;

interface Props {
  options: City[];
  onSelect: () => void;
}
const Search: React.FC<Props> = ({ options, onSelect }) => {
  function filterOption(input, option) {
    return (
      option.props
        .children!.toString()
        .toLowerCase()
        .indexOf(input.toLowerCase()) >= 0
    );
  }

  return (
    <Select
      showSearch
      style={{ width: '100%' }}
      placeholder="Выберете город"
      optionFilterProp="children"
      onChange={onSelect}
      // onFocus={onFocus}
      // onBlur={onBlur}
      // onSearch={onSearch}
      notFoundContent={<FormattedMessage {...messages.notFound} />}
      filterOption={filterOption}
    >
      {options.map(city => (
        <Option key={city.name} value={city.name}>
          {city.name}
        </Option>
      ))}
    </Select>
  );
};

export default Search;
