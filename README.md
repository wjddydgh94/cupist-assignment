# 큐피스트 사전과제

### 사용 모듈

- react-router-dom을 사용하여 페이지 전환
  - 클라이언트 사이드에서 이뤄지는 라우팅을 간단하게 해줍니다
- styled-component를 사용하여 스타일 적용
  - CSS-in-JS 모듈
- react-textarea-autosize를 사용하여 textarea autosize 적용
  - textarea의 내용에 따라 textarea의 높이를 조절해주는 모듈

## 메인 페이지

<img src="https://user-images.githubusercontent.com/52948971/152685752-402f13a3-a21a-4cc6-a70a-4a11605efb64.mov" />

### 구현 기능

이미지 슬라이드

- 이미지 좌측 클릭 시 이전 이미지 표시
- 이미지 우측 클릭 시 다음 이미지 표시

x버튼, 좋아요 버튼

- 클릭 시 해당 데이터 제거

맞춤 추천 선택

- 선택 버튼 클릭 시 최상단에 맞춤 추천 데이터 추가

추가 추천

- 페이지 하단 도달 시 하단에 추가 추천 데이터 추가

페이지 이동

- 우측 상단 필터 버튼 클릭 시 프로필 수정 페이지로 이동

## 프로필 수정 페이지

<img src="https://user-images.githubusercontent.com/52948971/152684854-141c5344-371e-4a8e-b53f-37eb84e97fa5.mov" />

### 구현 기능

수정 정보

- useState hook으로 상태 관리 및 데이터 변경
- 값이 없는 경우 placeholder 노출

키, 체형, 학력

- 클릭 시 수정을 위한 다이얼로그 노출

소개

- react-textarea-autosize를 사용하여 textarea 높이 조절
