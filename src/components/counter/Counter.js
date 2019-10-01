import { observer, useAsObservableSource, useLocalStore } from "mobx-react-lite"


export const Counter = observer(function Counter(props) {
    const observableProps = useAsObservableSource(props);

    const store = useLocalStore(() => ({
        count: 10,
        get multiplied() {
            return observableProps.multiplier * this.count
        },
        inc() {
            this.count += 1
        }
    }));

    return (
        <div>
            Multiplied count: <span>{store.multiplied}</span>
            <button id="inc" onClick={store.inc}>
                Increment
            </button>
        </div>
    )
});