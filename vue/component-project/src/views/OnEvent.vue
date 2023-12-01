<template>
    <div>
        <button type="button" v-on:click="increaseCounter">Add 1</button>
        <input v-model.number="num">
        <button type="button" @click="setCount(num, $event), msg()">Add {{ num }}</button>
        <p>The Counter is : {{ counter }}</p>
        <hr>
        <form @click.self="msg('form')">
            Form
            <div @click="msg('div')">
                Div
                    <p @click.stop="msg('p')">
                        P
                        <a @click.prevent="msg('a')" href="http://www.naver.com">네이버</a>
                    </p>
            </div>    
        </form> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter : 0,
            num : 7
        }
    },
    methods : {
        increaseCounter(e) {
            console.log(e);
            this.counter = this.counter + 1;
        },
        setCount(value, event) {
            console.log('setCount: ', event);
            this.counter = this.counter + value;
        },
        msg(msg) {
            alert(`${msg} 선택!`);
        }
    }
};
</script>
<style scoped>
    form, form * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>