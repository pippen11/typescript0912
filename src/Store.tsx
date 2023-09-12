import React from "react";
import { Address, Restaurant } from "./model/restaurant";

interface OwnProps {
  info: Restaurant;
  changeAddress(address: Address): void;
  //:함수 리턴타입이 뭐냐에따라나옴
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
