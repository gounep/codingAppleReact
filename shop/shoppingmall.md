# PART2 : 쇼핑몰 프로젝트

## 2-1. 새로운 프로젝트 생성 & Bootstrap 사용하기

## 2-2. 이미지 넣는 법 & Public 폴더 이용하기

css파일에서 src폴더의 이미지 넣을 땐 './이미지경로'
html에서 src폴더의 이미지 넣을 땐 import 작명 from '이미지경로' -> 그리고 필요한 곳에 작명한 것 쓰기

리액트는 사이트발행 전에 html js css 파일을 압축함(bundling)

public 폴더 안에 있던 파일들은 압축이 되지 않음
html에서 public폴더 이미지 사용할 땐 그냥 /이미지경로

## 2-3. 코드가 길어지면 import export

다른 파일에 있던 자료 가져오려면 import / export 문법 쓴다
export 하려면 export default 변수명;
import 하려면 import 작명 from '파일경로'

export 여러개 하려면 export {변수1, 변수2}
import{변수1, 변수2} from '경로'
