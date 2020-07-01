import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'

export const Card = styled(Paper)`
  margin: 3vh auto 0 auto;
  max-width: 92vw;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Layout = styled.div`
  display: flex;
  width: fit-content;
`;

export const LayoutGroup = styled.div`
  padding: 0 2vw;
  display: inline-flex;
  flex-direction: column;
  height: 92vh;
  width: ${props => props.width};

  transition: left 0.5s ease;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    position: relative;
    width: 100vw;

    top: ${props => props.shift && props.shift.top}vw;
    left: ${props => props.shift && props.shift.left}vw;
  }
`;
