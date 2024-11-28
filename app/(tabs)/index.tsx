import React, { useEffect, useState } from "react";
import {View, ScrollView} from 'react-native';
import SampleComponent from "./samplecomponent";
import StylingComponent from "./pages/StylingComponent";
import FlexBox from "./pages/materiflexbox";
import Position from "./pages/PositionReactNative";
import PropsDinamis from "./pages/propsdinamis";
import StateDinamis from "./pages/statedinamis";
import Communication from "./pages/Communication";

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        <Communication />
      </ScrollView>
    </View>
  );
};

export default App;