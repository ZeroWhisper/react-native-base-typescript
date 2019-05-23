import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

import { Reactotron as ReactotronType } from "reactotron-core-client";

export default class RT {
  reactotron?: ReactotronType;

  constructor() {
    if (__DEV__) this.load();
  }

  load = function(): void {
    this.reactotron = Reactotron.configure()
      .useReactNative({})
      .use(reactotronRedux())
      .use(sagaPlugin({}))
      .connect();

    console.log = this.reactotron.log;
  };

  getCreateSagaMonitor = function(): any | undefined {
    if (this.reactotron) {
      return this.reactotron.createSagaMonitor();
    }
    return undefined;
  };

  getCreateEnhancer = function(): any | undefined {
    if (this.reactotron) {
      return this.reactotron.createEnhancer();
    }
    return undefined;
  };
}
