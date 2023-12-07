// mixin에 등록되는 함수 앞에는 $ 붙임
export default {
    methods : {
        $dateFormat(value, format) {
            let date = value == '' ? new Date() : new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);

            let result = format.replace('yyyy', year)
                                .replace('MM', month)
                                .replace('dd', day);
            return result;
        }
    }
}