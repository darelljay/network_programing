# 자바스크립트 DOM
## 문서객체 모델(DOM: Document Object Model)
- 웹브라우저가 HTML 페이지를 인식하는 방법
- document 객체와 관련된 객체들의 집합
- DOM을 이용하면 HTML페이지에 동적으로 태그를 추가, 수정, 삭제할 수 있음

### 1. id로 접근
> getElementById()  
document.getElementById(아이디명);

### 2. class로 접근
> getElementsByClassName()  
document.getElementsByClassName(클래스명);

### 3. name으로 접근
> getElementsByName()  
document.getElementsByName(이름)

### 4. tag 이름으로 접근
> getElementsByTagName()  
document.getElementsByTagName(태그명);

### 5. css기법으로 접근
> (1) querySelector() : 첫 번째 노드 선택 
- 아이디: document.querySelector(#아이디명);
- 클래스: document.querySelector(.클래스명);  
- 태그명: document.querySelectorAll(태그명);
> (2) querySelectorAll() : 전체 노드 선택  
- 아이디: document.querySelectorAll(#아이디명);
- 클래스: document.querySelectorAll(.클래스명); 
- 태그명: document.querySelectorAll(태그명);

## DOM요소 컬렉션    
HTMLCollection과 NodeList는 문서내에 노드들을 가지고 있는 유사배열  
노드 객체의 상태 변화를 실시간으로 반영하는 살아있는 객체  

1.HTMLCollection  
라이브 컬렉션(동적 리스트)으로서 DOM의 변경사항을 실시간으로 반영  
> getElementsByTagName()  
getElementsByClassName() 


2.NodeList  
정적 리스트로 노드 객체의 상태 변화를 실시간으로 반영하지 못함.
> getElementsByName()  
querySelectorAll()

3.classList  
항상 현재를 반영하는 class 이름 관리를 위한 컬렉션 유형
>(1) 추가: classList.add("className");  
>(2) 제거: classList.remove("className");  
>(3) 있으면 추가 없으면 제거: classList.toggle("className");  
>(4) 점검: classList.contains("className");  
>(5) 교체: classList.replace("oldClass", "newClass");
  