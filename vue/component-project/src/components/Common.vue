<template>
    <!-- html -->
    <div>
    </div>    
</template>
<script>
    export default {
        components : [],
        data() {
            return {
                //testData : '',
                today : new Date()
            }
        },
        computed : {
           // test() {
            //     console.log(this.$data, this.testData);
            // },
            AfterYear() {
                return this.today.setFullYear(this.today.getFullYear() + 1);
            }  
        }, 
        methods : {},
        watch : {},
        created() {},
        mounted() {}
    }
</script>
<style>

</style>