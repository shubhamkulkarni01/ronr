import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'

import { swipeable } from './Gesture.js';

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

export const SwipeableLayout = swipeable(Layout, 3, 0.3);

export const LayoutGroup = styled.div`
  padding: 0 2vw;
  display: inline-flex;
  flex-direction: column;
  height: 92vh;
  width: ${props => props.width};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100vw;
    height: unset;
  }
`;
