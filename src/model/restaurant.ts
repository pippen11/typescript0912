// let data = {
//   name: "누나네 식당",
//   category: "western",
//   address: {
//     city: "incheoi",
//     detail: "somewhere",
//     zipCode: 23425634,
//   },
//   menu: [{ name: "rose pasta", price: 2000, category: "PASTA" }, {}],
// };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
  //여기서 menu라는건 객체의 array타입이다
};

export type Address = {
  city: string;
  detail: string;
  zipCode: Number;
};
// zipCode?: Number; ?적으면 zipCode가 잇을수도있고 없을수도있고

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type AddressWithoutZip = Omit<Address, "zipCode">;
// Address타입에서 zipCode만 빼고싶을때 이런식으로도 쓸수있다 AddressWithoutZip 는 zipCode가 빠진 타입이 들어간다
export type RestaurantOnlyCategory = Pick<Restaurant, "category">;
// Restaurant 타입에서 카테고리 타입만 픽해주세요

// api응답 값이온다가정하에 T타입 뭐가올지모르니? Type이 다양하게 들어올거같을때 <T>씀
export type ApiResponse<T> = {
  data: T[];
  totalpage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
// Restaurant타입이 올수도있고
export type MenuResponse = ApiResponse<Menu>;
// Menu타입이 올수도있고
