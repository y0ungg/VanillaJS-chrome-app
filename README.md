## 바닐라JS 복습 <크롬 앱 만들기> 클론코딩
### Day 4
Quotes and Background

Math.random() 메서드를 사용해서 랜덤 명언, 랜덤 배경 사진을 출력한다.

Math.round(): 정수로 반올림한다.
Math.ceil(): 천장. 정수로 올림한다.
Math.floor(): 마루. 정수로 내림한다.

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

form submit 구현

`.preventDefault()` : 브라우저 기본 동작을 막는다.  

실행시 해당 이벤트핸들러의 인자로 받는 event(객체)를 조회하면  
{defaultPrevented : true}

이벤트 핸들러 함수의 첫번째 인자(event)는 이벤트 처리를 객체 형태로 받는다.  
따라서 event.target.value와 같이 접근할 수 있다.