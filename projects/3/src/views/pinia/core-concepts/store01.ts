import { defineStore } from 'pinia';

const useStore01Store = defineStore('store01', {
    state: () => {
        return { foo: 1 };
    },
    getters: {
        getFoo: (state) => state.foo,
    },
    actions: {
        incrementFoo() {
            this.foo++;
        },
    },
});

export { useStore01Store };
