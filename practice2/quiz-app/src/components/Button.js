import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Button = ({ text }) => {
  const Button = styled.div`
    width: 112px;
    height: 44px;
    border-radius: 5px;
    background: #3ee035;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #42ed39;
      cursor: pointer;
    }
  `;

  const onClick = () => {};
  return (
    <>
      <Button to="/">
        엄청길다라가ㅓ자거자기ㅓㅏㅣ무누자아자ㅏ이이잉야야야야
      </Button>
      <Link to="/">start</Link>
    </>
  );
};

export default Button;
