import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  direction:rtl;
  padding-bottom:16rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-bottom:13rem;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  width:19.5rem;
  max-width:100%;
`;

export const ItemIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border: 0.5rem solid #ededed;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  max-width:100%;

  span {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;
export const ItemDetail = styled.div`
  font-size: 0.75rem;
  border-radius: 0.75rem;
  background-color: rgba(117, 139, 235, 0.08);
  // width: 14.75rem;
  flex:1;
  height: 4rem;
  padding: 0.44rem 0.75rem;
  display: flex;
  justify-content: space-between;
 

  & > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;

    span{
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
  }

  & > span {
    background-image: url(${arrow});
    height: 100%;
    width: 1.125rem;
    background-position: center;
    background-repeat: no-repeat;
  }
`;


