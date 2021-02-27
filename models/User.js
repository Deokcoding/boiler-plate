const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,     // 빈칸을 없애주는 역할
        unique: 1       // 중복 값 입력 금지
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,   // 1이면 일반 유저, 0이면 관리자
        default: 0
    },
    image: String,
    token: {            // 유효성 관리
        type: String
    },
    tokenExp: {         // 토큰을 사용할 수 있는 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)     // 스키마를 모델로 감싸줌 ('모델이름', 스키마이름)

module.exports = { User }   // User 모델을 다른 파일에서도 사용할 수 있도록 모듈화