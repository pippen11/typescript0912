import React from "react";
import { Menu } from "./model/restaurant";

interface OwnProps extends Omit<Menu, "price"> {
  // interface OwnProps extends Menu
  showBestMenuName(name: string): string;
}

//Menu타입을 가져옴
//프롭스 함수타입없는걸 이렇게 추가해줄수있따

// type OwnProps = Menu & {
//     showBestMenuName(name: string): string;
//   };
//interface대신 type을 이렇게도 쓸수있다

const BestMenu: React.FC<OwnProps> = ({
  name,
  //   price,
  category,
  showBestMenuName,
}) => {
  return <div>{name}</div>;
};

export default BestMenu;
