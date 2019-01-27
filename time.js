// Moment.js 패키지를 import 하였다.
import moment from 'moment'

export const currentTime = () => {
    return moment().format('H:m:s');
}