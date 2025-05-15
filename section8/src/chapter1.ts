/**
 * 인덱스드 액세스 타입
 * 객체, 배열, 튜플 모두에 사용할 수 있다.
 */

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number; // 추가
//   };
// }

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 인덱스드 액세스 타입 -> 기존 프로퍼티 타입 변경 혹은 추가, 제거 시에 자동으로 반영됨!
// 객체에 사용할 때 주의점
// 1. 대괄호 안에 들어가는 문자열은 값이 아니라 타입!
// 2. 타입을 쓰더라도 존재하지 않는 프로퍼티를 쓰면 오류가 발생(당연한 오류)
// 3. [응용] author에서 id 타입만 가지고 오고 싶다면?
//    -> Post["author"]["id"]

// function printAuthorInfo(author: Post["author"]) {
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// const post: Post = {
// const post: PostList[number] = {
const post: PostList[0] = {
  // 0은 값이 아니라 타입!
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 27,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
// type Tup3 = Tup[3]; // 존재 X -> 오류
type TupNum = Tup[number]; // string | number | boolean
