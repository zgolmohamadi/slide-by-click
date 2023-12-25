import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

export const StylesSection = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: 0;
  overflow: hidden;
  z-index: 5;
  transition: all 0.3s ease 0s;

  & > span {
    width: 230%;
    height: 100vh;
    position: absolute;
    top: 2.4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 12px;
    border-radius: 50%;
    padding-top: 4rem;
    background-color: white;
  }

  & > div {
    width: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    gap: 2rem;
    padding-top: 4rem;
    margin-bottom: 0rem;
    margin-top: 4rem;
    transform: ${({ position }) => `translateX(${position / 16}rem)`};
    transition: all 0.3s linear 0s;
    height: 14.25rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 11.25rem;
    }
  }
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
`;

export const StyledCourse = styled.li`
  width: 5.5rem;
  height: 16.3rem;
  border-radius: 4.4rem 4.4rem 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s linear 0s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform: ${({ selected }) =>
    selected ? "translateY(-4rem)" : "translateY(0)"};

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(117, 139, 235, 0.08);
    visibility: ${({ selected }) => (selected ? "visible" : "hidden")};
  }

  div:last-child {
    display: ${({ selected }) => (selected ? "inline-flex" : "none")};
  }

  &:has(+ .selectd),
  &.selectd + li {
    transform: translateY(-2.5rem);
  }

  div:first-child {
    border-radius: 50%;
    border: 0.5rem solid #ededed;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.5rem;
    height: 5.5rem;

    span {
      display: flex;

      img {
        width: 3.25rem;
        height: 3.25rem;
      }
    }
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    direction: rtl;

    & > span {
      font-size: 0.75rem;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 0.6rem;
      width: 100%;

      &:first-child {
        font-size: 0.5rem;
        padding: 0.125rem 0.25rem;
        border-radius: 0.5rem;
        background: #ffc107;
        width: auto;
      }
    }
    & > p {
      display: flex;
      direction: rtl;
      align-items: center;
      font-size: 0.625rem;
      justify-content: center;
      margin: 0;
      img {
        margin-left: 0.25rem;
      }
    }
  }
`;
