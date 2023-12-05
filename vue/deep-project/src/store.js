// store.js
import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
           cart : [
            {
                product_id : 1,
                product_name : "아이폰 거치대",
                category : "A"
            }
           ],
           count : 0
        }
    },
    getters : { // 자체적으로 정보를 들고있는 것이 아니기에 computed와 매칭해서 작성
        cartCount : (state) => { 
            return state.cart.length;
        }
    },
    mutations : { // 내부적으로 값을 변경하는데 있어 동기식 
        increment(state) { // state에서 정의된 값 직접 수정은 안 됨 -> 함수로 변경 increment함수를 기반으로 변경
            state.count++;
        },
        addProduct(state, info) {
            state.cart.push(info);
        }
    },
    // actions : { // 비동기
    //     addProduct(state, info) {

    //     }
    // }
});

export default store;