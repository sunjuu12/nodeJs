<template>
   <div>
        <h1>{{ title + ' !!!' }}</h1>
        <h2 v-bind:name="'sample'" v-text="title" />
        <p v-html="tagList" />
        <p v-text="tagList" />
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{ typeof valueModel }}</p>
        <input type="number" v-model.lazy="numberModel">
        <p>{{ numberModel + 10000 }}</p>
        <select v-model="selectModel">
            <option value="spring">봄</option>
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel }}</p>
        <textarea v-model="textModel" />
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
        <p>{{ chData }}</p>
        <div>
            <input type="checkbox" value="서울" v-model="city">서울
            <input type="checkbox" value="대구" v-model="city">대구
            <input type="checkbox" value="부산" v-model="city">부산
            <p>{{ city }}</p>
        </div>
        <div>
            <input type="radio" value="독서" v-model="hobby">독서
            <input type="radio" value="영화" v-model="hobby">영화
            <input type="radio" value="운동" v-model="hobby">운동
            <p>{{ hobby }}</p>
        </div>
        <hr>
        <img v-bind:style="styleData" v-bind:src="imgUrl">
        <div class ="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class Binding First</div>
        <div v-bind:class="myClass">Class Binding Second</div>                                       
    </div> 
</template>
<script>
export default {
    data() {
        return {
            title : 'Hello, Vue.js',
            tagList : '<strong> Today is ... </strong>',
            valueModel : 'Korea',
            numberModel : 0,
            selectModel : 'winter',
            textModel : '백견불여일타',
            chData : '',
            city : [],
            hobby : '운동',
            imgUrl : 'https://kr.vuejs.org/images/logo.png',
            styleData : {
                backgroundColor : 'black',
                width : '200px'
            },
            backSetting : 'background-color:skyblue; width:200px',
            addStyle : 'height: 200px;',
            isActive : false,
            //hasError : !this.isActive
            myClass : 'active'
        }
    },
    computed : {
        hasError() {
            return !this.isActive;
        }
    }
}
</script> 
<style scoped>
    container {
        width : 100%;
        height : 200px;
    }
    .active {
        background-color: aquamarine;
        font-weight: bold;
    }
    .text-red {
        color: red;
    }
</style>