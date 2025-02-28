/*
- 서로소 유니온 타입
- 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
- string, number는 서로소 관계 
*/

// tag를 추가함으로써 서로소 관계가 된다. (교집합 X)
// string literal은 딱 한 개의 값만 가지기 때문이다.
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }
  // if ("kickCount" in user) { // 방법 1. 다른 사람이 볼 때 이해하기 힘듦.
  // if (user.tag === "ADMIN") { // 방법 2. 직관성 떨어짐
  //   // admin 타입
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if (user.tag === "MEMBER") {
  //   // member 타입
  //   console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  // } else if (user.tag === "GUEST") {
  //   // guest 타입
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  // }
}

/*
- 추가 사례: 비동기 작업의 결과를 처리하는 객체
*/
// 선택적 프로퍼티보다 서로소 유니온 타입으로 만들어주는 것이 좋다.
// 직관적, 안전
type LoadingTask = { state: "LOADING" };
type FailedTask = { state: "FAILED"; error: { message: string } };
type SuccessTask = { state: "SUCCESS"; response: { data: string } };
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// ?:로 인해 선택적 옵션이라고 정해짐
// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

// 로딩 중 -> 콘솔에 로딩 중 출력
// 실패 -> 실패 : 에러메세지 출력
// 성공 -> 성공 : 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      // console.log(`에러 발생 : ${task.error?.message}`);
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      // console.log(`성공 : ${task.response?.data}`);
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

// const loading: AsyncTask = {
//   state: "LOADING",
// };

// const failed: AsyncTask = {
//   state: "FAILED",
//   error: {
//     message: "오류 발생 원인은 ~~",
//   },
// };

// const success: AsyncTask = {
//   state: "SUCCESS",
//   response: {
//     data: "데이터 ~~",
//   },
// };
