import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Advanced Theme Provider
const ButtonTM = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

ButtonTM.defaultProps = {
  theme: {
    main: "palevioletred",
  },
};

// Custom
const CardContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 800px;
`;

const CH6 = styled.h6`
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const CH3 = styled.h3`
  letter-spacing: 1px;
  margin: 10px 0;
`;

const CardPrev = styled.div`
  background-color: #2a265f;
  color: #fff;
  padding: 30px;
  max-width: 250px;
`;

const CardInfo = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
`;

const ButtonCard = styled.div`
  background-color: #2a265f;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  letter-spacing: 1px;
`;

function Content() {
  return (
    <div className="Content">
      <Wrapper>
        <CardContent>
          <CardPrev>
            <CH6>Course</CH6>
            <CH3>JavaScript Fundamentals</CH3>
          </CardPrev>
          <CardInfo>
            <h6>Chapter 4</h6>
            <h2>Callbacks Yosh & Closures</h2>
            <ButtonCard>INFO</ButtonCard>
          </CardInfo>
        </CardContent>
      </Wrapper>
    </div>
  );
}

export default Content;
