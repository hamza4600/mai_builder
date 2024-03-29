import styled from "styled-components";

import { forwardRef, memo } from "react";

const Model1 = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  `;

export const ModelOne = memo(forwardRef(
    function ModelOne(props, ref) {
        const { children } = props;
        return (
            <Model1 ref={ref} {...props} id="model">
                {children}
            </Model1>
        )
    }
))

const Model2 = styled.div`
  position: relative;
  height: 100%;
  max-height: 350px;
  padding: 1rem;
  z-index: ${(props) => (props.show ? "-1" : "")};
  z-index: 2;
  background-color: #003153;
  color: #fff;
  width: 100%;
  max-width: 661px;
  border-radius: 4px;

    @media (max-width: 768px) {
        max-height: 410px;
    }
  `;

export const ModelTwo = memo(forwardRef(
    function ModelTwo(props, ref) {
        return (
            <Model2 ref={ref} show={props.show} {...props}>
                {props.children}
            </Model2>
        )
    }
))