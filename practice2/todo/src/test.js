import './test.scss';

const test = () => {
  return (
    <>
      <p>P</p>
      <span>
        span
        <p>P</p>
      </span>
      <p>P</p>

      <div>
        <span>서로 </span>
        <div>떨어지면</div>
        <p>적용 안됌</p>
      </div>
    </>
  );
};

export default test;
