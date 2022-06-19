## 바닐라JS 복습 <크롬 앱 만들기> 클론코딩
### Day2
form 입력값 받아와서 username 출력하기
localStorage에 username 저장하기
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.removeItem(key)


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