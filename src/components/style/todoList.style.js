import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 405px;
  background: #fff;
  margin: 137px auto;
  padding: 28px 0 30px;
  border-radius: 7px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const TaskInput = styled.div`
  height: 52px;
  padding: 0 25px;
  position: relative;

  img {
    top: 50%;
    position: absolute;
    transform: translate(17px, -50%);
  }

  input {
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 18px;
    border-radius: 5px;
    padding: 0 20px 0 53px;
    border: 1px solid #999;

    &:focus,
    &.active {
      padding-left: 52px;
      border: 2px solid #1e293b;
    }

    &::placeholder {
      color: #bfbfbf;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 25px;
  border-bottom: 1px solid #ccc;
`;

export const Filters = styled.div`
  span {
    margin: 0 8px;
    font-size: 17px;
    color: #444;
    cursor: pointer;

    &:first-child {
      margin-left: 0;
    }

    &.active {
      color: #1e293b;
    }
  }
`;

export const ClearButton = styled.button`
  border: none;
  opacity: 0.6;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  padding: 7px 13px;
  border-radius: 4px;
  background: #1e293b;
  letter-spacing: 0.3px;
  pointer-events: none;
  transition: transform 0.25s ease;

  &.active {
    opacity: 0.9;
    pointer-events: auto;
  }

  &:active {
    transform: scale(0.93);
  }
`;

export const TaskBox = styled.ul`
  margin-top: 20px;
  margin-right: 5px;
  padding: 0 20px 10px 25px;

  &.overflow {
    overflow-y: auto;
    max-height: 300px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e6e6e6;
    border-radius: 25px;
  }
`;

export const Task = styled.li`
  list-style: none;
  font-size: 17px;
  margin-bottom: 18px;
  padding-bottom: 16px;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
  }

  label {
    display: flex;
    align-items: flex-start;

    input {
      margin-top: 7px;
      accent-color: #1e293b;
    }

    p {
      user-select: none;
      margin-left: 12px;
      word-wrap: break-word;

      &.checked {
        text-decoration: line-through;
      }
    }
  }
`;

export const Settings = styled.div`
  position: relative;

  i,
  li {
    cursor: pointer;
  }
`;

export const TaskMenu = styled.ul`
  z-index: 10;
  right: -5px;
  bottom: -65px;
  padding: 5px 0;
  background: #fff;
  position: absolute;
  border-radius: 4px;
  transform: scale(0);
  transform-origin: top right;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;

  &.show {
    transform: scale(1);
  }

  li {
    height: 25px;
    font-size: 16px;
    margin-bottom: 2px;
    padding: 17px 15px;
    cursor: pointer;
    justify-content: flex-start;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      background: #f5f5f5;
    }

    i {
      padding-right: 8px;
    }
  }
`;