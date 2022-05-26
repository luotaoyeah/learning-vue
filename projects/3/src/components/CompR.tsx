import { defineComponent } from 'vue';

const CompR = defineComponent({
    setup() {
        return () => (
            <fieldset>
                <legend>R</legend>
            </fieldset>
        );
    },
});

export { CompR };
