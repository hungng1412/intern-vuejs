<template>
    <div>
        <h1>Temperature Converter</h1>
        Celius
        <input type="number" :value="c" @change="setC">
        Fahrenheit
        <input type="number" :value="f" @change="setF">
         
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const c = ref('')
    const f = ref('')

    function setF(e, v = +e.target.value){
        f.value = v
        c.value = (v - 32) * (5 / 9)
    }

    function setC(e, v = +e.target.value){
        c.value = v
        f.value = v * (9/5) + 32
    }
</script>