// 설정 파일에 설치한 plugin을 import 하였다.
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // Entry(들어감, 입구) 설정의 기본값은 ./src/index.js이다. 아래와 같이 변경도 가능.
    entry: './script.js',
    // 번들링 결과를 dist/main.js 기본 설정 대신 경로를 변경
    output: {
        // __dirname 은 현재 디렉토리 의미
        // path 로 번들된 파일을 놓을 경로를 설정한다.
        path: __dirname,
        // 이제 웹팩을 실행하면 최상위 디렉토리에 build.js 가 생성된다.
        // 번들된 파일의 이름을 설정한다.
        filename: 'build.js'
    },
    // module 관련 속성 추가.
    module: {
        // rules 속성을 통해 처리 규칙을 등록
        rules: [
            {
                // test 항목에 정의된 정규식과 매칭되는 파일은 
                // use 항목에 등록된 로더를 통해서 처리되게 된다.
                test: /\.css$/, // 확장자가 css 인 파일만 인식하도록 설정
                use: [
                    'style-loader', //creates style nodes from JS strings
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/, 
                use: [
                    // 로더가 여러개면 배열로 요렇게 불러온다.
                    "style-loader",
                    'css-loader', // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    // 단일 로더면 요렇게 불러온다.
                  loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        // plugins 속성에 import한 plugin을 추가하였다.
        // 이제 웹팩을 실행하면 build.js 파일이 지워졌다가 다시 생성될 것이다!
        new CleanWebpackPlugin('build.js'),
    ]
};