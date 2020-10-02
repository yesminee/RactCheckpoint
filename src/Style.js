import styled from 'styled-components';
export const Styles = styled.div`
  h1 {
    text-align: center;
    color: #777;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: 100p auto;
    margin-top: 100px;

    label {
      font-weight: bold;
      margin-top: 20px;
    }

    input {
      font-size: 1.2em;
    }
    select {
      font-size: 1.2em;
      background: #e7d1ff;
    }

    .error {
      color: red;
      font-size: 0.6em;
    }
  }
  button {
    background: #8486bd !important;
    padding: 10px;
    color: white;
    margin-top: 20px;
    border-radius: 10px;
    font-size: 1.2em;
  }
  customSelect {
    background-color: #d2a8ff;
  }
`;
