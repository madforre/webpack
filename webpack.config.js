module.exports = {
    // Entry 설정의 기본값은 ./src/index.js이다. 아래와 같이 변경도 가능.
    entry: './script.js',
    // 번들링 결과를 dist/main.js 기본 설정 대신 경로를 변경
    output: {
        // __dirname 은 현재 디렉토리 의미
        path: __dirname,
        // 이제 웹팩을 실행하면 최상위 디렉토리에 build.js 가 생성된다.
        filename: 'build.js'
    }
};