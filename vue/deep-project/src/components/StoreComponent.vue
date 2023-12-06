<template>
    <div>
        <form>
            <label>
                제품ID : 
                <input type="text" v-model="productInfo.product_id" />
            </label>
            <br>
            <label>
                제품명 : 
                <input type="text" v-model="productInfo.product_name" />
            </label>
            <br>
            <label>
                카테고리 : 
                <input type="radio" value="A" v-model="productInfo.category" />A
                <input type="radio" value="B" v-model="productInfo.category" />B
            </label>
            <br>
            <button type="button" @click="addCart">추가</button>
        </form>
        <table>
            <thead>
                <caption>total:{{ total }}</caption>
                <tr>
                    <th>카테고리</th>
                    <th>제품ID</th>
                    <th>제품명</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(info, idx) in productList">
                    <td>{{ info.category }}</td>
                    <td>{{ info.product_id }}</td>
                    <td>{{ info.product_name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
//StoreComponent.vue

export default {
    data() {
        return {
            productInfo : {
                product_id : '',
                product_name : '',
                category  : 'A'
            }
        }; 
    },
    computed : { // store의 값을 불러옴
        productList() {
            // 저장소 안에 state에 저장된 cart 불러옴
            return this.$store.state.cart; 
        },
        total() {
            // getter를 이용해 값을 불러옴
            return this.$store.getters.cartCount;
        }
    },
    methods : {
        addCart() {
            // 정확한 값을 넘기려면 내부 필드 값을 복사해서 넘겨야 함.
            let obj = {
                product_id : this.productInfo.product_id,
                product_name : this.productInfo.product_name,
                category : this.productInfo.category
            }
            //this.$store.commit('addProduct', obj); // mutations 
            this.$store.dispatch('addProduct', obj); // action
            // this.$store.commit('addProduct', this.productInfo); // 내부 값 계속 연결 됨. 참조 타입은 오브젝트가 아닌 오브젝트 메모리 주소를 가지고 있음. 객체의 주소를 알려줌
        }
    }
}
</script>