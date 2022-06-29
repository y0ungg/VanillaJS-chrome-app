## 바닐라JS 복습 <크롬 앱 만들기> 클론코딩

### Day 6
To Do List - Delete 구현  
local storage의 todos 지우기

기존에 배열의 문자열 요소로 push했던 todo list를 object로 형태로 구성했다.   
todo list 객체 속성은 {text: 사용자가 입력한 값, ID: Date.now()} 으로 준다.

`array.filter`: 지우고 싶은 item을 제외하고 새 array를 만든다.
  
html 요소의 id 값이 숫자여도 숫자로 이루어진 문자열인 상태이기 때문에 `parseInt(li.id)` 숫자로 형변환이 필요하다.

---
### Day 5
To Do List  

DOM으로 접근하여 input value를 받고, 버튼으로 삭제하고, 로컬 스토리지에 저장한다.  

`삭제할요소.remove()` 
`JSON.stringify(array)`: 문자열로 바꾸기 위해 사용 (배열처럼 생긴 문자열)  
`JSON.parse(JSON.stringify(array))`: 문자열을 실제 배열로 변환하기 위해 사용
  

선택한 요소를 html에서 제거, 아직 local storage에는 그대로 남아있다.

 ```js
  function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
};
```

---
### Day 4
Quotes and Background

Math.random() 메서드를 사용해서 랜덤 명언, 랜덤 배경 사진을 출력한다.

Math.round(): 정수로 반올림한다.
Math.ceil(): 천장. 정수로 올림한다.
Math.floor(): 마루. 정수로 내림한다.  
  
prepend(): append와 반대로 요소를 맨 앞으로 prepending한다. (앞에 붙이다.)

---
### Day 3
Clock (호출 스케줄링)

`setInterval(callback, delay, arg0, arg1 ...)`: ms초마다 callback 함수 실행  
`setTimeout(callback, ms, arg0, arg1 ...)`: ms초 후 callback 실행

args =  함수에 전달할 인수
  
`string.padStart(num, str)`
string.length < num이면, num이 될때까지 앞에 str을 추가한다.  
`padEnd()`: 반대로 뒤에 str을 추가한다.
  
  
---
### Day 2
form 입력값 받아와서 username 출력하기

localStorage에 username 저장하기
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.removeItem(key)

---
### Day 1

DOM : HTML을 JavaScript object처럼 접근할 수 있는 model

```js
console.dir(document.body)

const createDiv = document.createElement('div')
const createSpan = document.createElement('span')

createDiv.className = 'first'
createSpan.setAttribute('id', 'value')

createDiv.append(createSpan)
document.body.append(createDiv)

const div = document.querySelector('first')
const span = document.getElementById('value');
```

- form submit 구현

- `.preventDefault()` : 브라우저 기본 동작을 막는다.  
실행시 해당 이벤트핸들러의 인자로 받는 event(객체)를 조회하면  
{defaultPrevented : true}

- 이벤트 핸들러 함수의 첫번째 인자(event)는 이벤트 처리를 객체 형태로 받는다.  
따라서 event.target.value와 같이 접근할 수 있다.  

- Event - Web API   
https://developer.mozilla.org/ko/docs/Web/API/Event 

  `onmouseenter`, `onmouseleave` : css hover과 비슷한 효과를 가리키는 js 이벤트   

```js
window.addEventListener("mouseenter", 이벤트핸들러함수) //마우스를 올려놓으면 함수 호출
window.addEventListener("copy", () => console.log("copied")) // 복사하면 함수 호출
```