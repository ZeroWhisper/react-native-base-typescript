import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
export default class RT {
    constructor() {
        this.load = function () {
            this.reactotron = Reactotron.configure()
                .useReactNative({})
                .use(reactotronRedux())
                .use(sagaPlugin({}))
                .connect();
            this.reactotron.clear();
            console.log = this.reactotron.log;
        };
        this.getCreateSagaMonitor = function () {
            if (this.reactotron) {
                return this.reactotron.createSagaMonitor();
            }
            return undefined;
        };
        this.getCreateEnhancer = function () {
            if (this.reactotron) {
                return this.reactotron.createEnhancer();
            }
            return undefined;
        };
        if (__DEV__)
            this.load();
    }
}
//# sourceMappingURL=reactotron.js.map