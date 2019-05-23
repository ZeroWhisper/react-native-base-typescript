import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
const RT = Reactotron.configure()
    .useReactNative({})
    .use(reactotronRedux())
    .connect();
// if (RT) RT.clear();
export default RT;
//# sourceMappingURL=ReactotronConfig.js.map