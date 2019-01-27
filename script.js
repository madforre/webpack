// ./src/index.js 기본 엔트리 설정 대신 설정된 script.js 파일이다.

// 마치 JS 파일을 import 하듯이 CSS 파일을 import 한다.
// 여기서 주의 사항은 반드시 style.css 앞에 ./ 를 붙여줘야 한다는 것이다.
// 그렇지 않으면 프로젝트 최상위 디렉토리가 아닌 node_modules 디렉토리를 뒤지게 된다. 
import './style.css'

const message = document.createTextNode("Webpack Example")
document.body.appendChild(message)