# 페이 워크

## 배포주소
https://paywork-todolist-canuk.netlify.app/
## 📌 프로젝트 소개

<p>
<img src="https://img.shields.io/github/languages/top/cksdnr3/pay-work-assignment?color=blue&logo=typescript"> </img>
<img src="https://img.shields.io/github/repo-size/cksdnr3/pay-work-assignment?color=%23&logo=Github"> </img>

</p>

### 📋 프리온보딩 코스 페이 워크 기업과제

> Redux + Redux-saga 기반 Todo List 웹앱 제작

<br/>

###  Branch Preview
- main : 네트 워크 통신 O | 동작 X
- non-network : 네트 워크 통신 X | 동작 O
  
**함수 단위 주석은 main branch를 확인해주세요.**

<br/>
<details>
    <summary><STRONG>
    📚 과제 요구사항 보기
    <STRONG></summary>

- TS + React TodoList 웹앱 제작
- Redux + Redux-saga를 통한 전역 상태 관리 및 비동기 처리

#### **세부 가이드**
- Base URL 
  ```
  http://dummy-server.io/
  ``` 
- POST // Todo 생성  
  URL
  ```
  POST // ../todo
  ```
  Request Body
  ```JSON
  {
    "content": "string"
  }
  ```
  Response(200) Body
  ```JSON
  {
    "msg": "string"
  }
  ```
- GET // 리스트 조회  
  URL
  ```
  GET // ../todo
  ```
  Request Body
  ```JSON
  { }
  ```
  Response(200) Body
  ```JSON
  {
      "count": 2, //integer
      "todoList": [
          {
              "id": "string",
              "content": "string",
              "isCheck": true, //boolean
              "createdAt": "2021-05-26T11:51:05.097Z"
          },
          {
              "id": "string",
              "content": "string",
              "isCheck": false, //boolean
              "createdAt": "2021-05-26T16:15:25.729Z"
          }
      ]
  }
  ```
- POST // Todo 수정  
  URL
  ```
  POST // ../todo:id
  ```
  Request Body
  ```JSON
  {
    "content": "string"
  }
  ```
  Response(200) Body
  ```JSON
  {
    "msg": "string",
    "content": "string"
  }
  ```
- POST // Todo 체크  
  URL
  ```
  POST // ../todo:id
  ```
  Request Body
  ```JSON
  {
    "isCheck": true // boolean
  }
  ```
  Response(200) Body
  ```JSON
  {
    "content": "string"
  }
  ```
- POST // Todo 삭제  
  URL
  ```
  POST // ../todo:id
  ```
  Request Body
  ```JSON
  { }
  ```
  Response(200) Body
  ```JSON
  {
    "msg": "string"
  }
  ```
</details>
<br/>

#### **구현 목록**
1. Todo 생성
2. Todo List 조회
3. Todo 수정
4. Todo 삭제
5. Todo 체크
6. Saga Template 생성 함수
7. Async Action 생성 함수
8. Action 생성 함수

<br/>

## 👨‍💻 실행 방법

### 설치

`npm install`

### 실행

`npm start`
