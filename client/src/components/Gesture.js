import React from 'react';
import styled from 'styled-components';

const Swipe = styled.div`
  transition: ${props => props.transition && 'left 0.5s ease;'};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    position: relative;
  }
`;

const NavigationTool = styled.div`
  display:none;
  margin: 2vh 0 -1vh 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

const Circle = styled.div`
  color: blue;
  height: 12px;
  width: 12px;
  clip-path: circle();
  margin: 1.5vw;
`;

export const swipeable = (Component, pages=3, threshold=0.15) => 
  props => {
    const [ shift, setShift ] = React.useState({left: 0, X: 0, top: 0, Y: 0});
    const [ startX, setStartX ] = React.useState(0);
    const [ transition, setTransition ] = React.useState(true);

    const touchStart = event => {
      setStartX(event.targetTouches[0].clientX)
      setTransition(false);
    };

    const touchMove = event => {
      setShift({...shift, X: event.targetTouches[0].clientX - startX});
    };

    const touchEnd = event => {
      const motion = shift.X/document.documentElement.clientWidth;

      let swipe = 0
      if(motion > threshold){
        swipe = shift.left !== 0 && 1;
      }
      else if(motion < -1 * threshold){
        swipe = shift.left !== -200 && -1;
      }

      setTransition(true);
      setShift({left: shift.left + 100*swipe, X: 0}); 
      setStartX(0);
    };

    let NavElement = [];

    for(var i = 0; i < pages; i++){
      NavElement.push(<Circle style={{backgroundColor: -100*i === shift.left ? '#6200ee' : 'grey'}}></Circle>)
    }

    return (
    <>
      <NavigationTool>
        {NavElement}
      </NavigationTool>
      <Swipe style={{ left: `calc(${shift.left}vw + ${shift.X}px)` }}
           transition={transition}
           onTouchStart={touchStart}
           onTouchMove={touchMove}
           onTouchEnd={touchEnd}>
        <Component>
          {props.children}
        </Component>
      </Swipe>
    </>
    )
  }
