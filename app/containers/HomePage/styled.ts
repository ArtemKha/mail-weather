import styled from 'styles/styled-components';

export const Section = styled.section`
  flex-grow: 100%;
`;

export const SearchSection = styled.section`
  flex-grow: 100%;
  margin-bottom: 10px;

  .ant-select-selection {
    font-size: 1.4em;
  }

  .ant-select-selection--single {
    .ant-select-selection__rendered {
      margin-left: 0px;
    }
  }

  .ant-select-selection,
  .ant-select-open,
  .ant-select-focused {
    border: 0px;
    border-radius: 0px;

    .ant-select-selection,
    &:active,
    &:focus {
      box-shadow: none;
    }
  }

  .ant-select-selection__placeholder {
    /* font-size: 1.2em; */
  }
`;

export const Filter = styled.section`
  margin: 20px 0;
  flex-grow: 100%;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-end;
  border-radius: 4px;
  /* padding: 10px; */
`;

export const Label = styled.label`
  max-width: 25%;
  flex: 1;
  font-family: inherit;
  display: inline-block;
  margin: auto;
`;

export const RangeInput = styled.label`
  max-width: 75%;
  flex: 1;
  display: inline-block;
`;

export const Container = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 10vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
