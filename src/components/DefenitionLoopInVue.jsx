import {defineComponent} from 'vue';

export default defineComponent({
    name: 'DefinitionsLoopInVue',
    props: ['data'],
    render() {
        return (
            <div>
                <h3>Hello JSX!</h3>
                <dl>
                    <p>{this.data.id}</p>
                    <dt>{this.data.dt}</dt>
                    <dd>{this.data.dd}</dd>
                    <br/>
                </dl>
            </div>
        );
    }
});
