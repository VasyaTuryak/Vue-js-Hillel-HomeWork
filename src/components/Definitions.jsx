import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Definitions',
    props: ['data'],
    render() {
        return (
            <div>
                <h3>Hello JSX!</h3>
                <dl>
                    {this.data.map(({id, dt,dd}) => {
                        return (
                            <dl>
                                <p key={id}>{id}</p>
                                <dt key={id}>{dt}</dt>
                                <dd key={id}>{dd}</dd>
                                <br/>
                            </dl>
                        );
                    })}
                </dl>
            </div>
        );
    }
});
