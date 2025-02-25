// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// 함수 안에서는 같은 이름의 타입 별칭을 따로 정해서 사용할 수 있다.
function func() {
  type User = {};
}

let user1: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "이땡땡",
  nickname: "hellobee",
  birth: "1990.02.20",
  bio: "안녕하세요~~",
  location: "광진구",
};

// 인덱스 시그니처
// 규칙을 이용해서 객체 타입을 지정
type CountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 2. Korea 프로퍼티를 반드시 가져야 한다는 정의
  // Korea: string; // 오류 -> 4. value의 타입이 호환해야 함.
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 862,
};
// 1. 아무런 프로퍼티가 없으면 규칙을 위반할 프로퍼티가 없기 때문에 오류가 나지 않는다.
// let countryNumberCodes2: CountryNumberCodes = {};
// 3. Korea 프로퍼티의 값을 지정해야 함.
let countryNumberCodes2: CountryNumberCodes = { Korea: 410 };
