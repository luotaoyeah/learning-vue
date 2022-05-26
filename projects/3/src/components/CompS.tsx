import { defineComponent } from 'vue';

const CompS = defineComponent({
    setup(props, { attrs, emit, expose, slots }) {
        const el01 = <div class="foo">A</div>;

        return () => (
            <fieldset>
                <legend>S</legend>
                {el01}
            </fieldset>
        );
    },
});

export default CompS;
