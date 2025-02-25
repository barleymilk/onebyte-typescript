// 함수 안에서는 같은 이름의 타입 별칭을 따로 정해서 사용할 수 있다.
function func() {
}
let user1 = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};
let user2 = {
    id: 2,
    name: "이땡땡",
    nickname: "hellobee",
    birth: "1990.02.20",
    bio: "안녕하세요~~",
    location: "광진구",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 862,
};
// 1. 아무런 프로퍼티가 없으면 규칙을 위반할 프로퍼티가 없기 때문에 오류가 나지 않는다.
// let countryNumberCodes2: CountryNumberCodes = {};
// 3. Korea 프로퍼티의 값을 지정해야 함.
let countryNumberCodes2 = { Korea: 410 };
export {};
