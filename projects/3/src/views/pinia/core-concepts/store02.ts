import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const useStore02Store = defineStore('store02', () => {
    // state
    const foo = ref(1);

    // getters
    const getFoo = computed((args) => foo.value);

    // actions
    function incrementFoo() {
        foo.value++;
    }

    return { getFoo, incrementFoo };
});

export { useStore02Store };
