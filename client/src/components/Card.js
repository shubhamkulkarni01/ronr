import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'

export const Card = styled(Paper)`
  margin: 3vh auto 0 auto;
  max-width: 92vw;
  display: flex;
  flex-direction: column;
`;

export const Layout = styled.div`
  display: flex;
  width: 100vw;
`;

export const LayoutGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
