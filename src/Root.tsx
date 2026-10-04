import {Composition} from 'remotion';

import {GeometricOrbit} from './compositions/GeometricOrbit';
import {GeometricPulse} from './compositions/GeometricPulse';
import {LuminousMitosis} from './compositions/LuminousMitosis';
import {Main} from './compositions/Main';
import {
  geometricOrbitComposition,
  geometricPulseComposition,
  luminousMitosisComposition,
  mainComposition,
} from './video-config';

export const RemotionRoot = () => {
  return (
    <>
      <Composition {...geometricPulseComposition} component={GeometricPulse} />
      <Composition {...geometricOrbitComposition} component={GeometricOrbit} />
      <Composition
        {...luminousMitosisComposition}
        component={LuminousMitosis}
      />
      <Composition {...mainComposition} component={Main} />
    </>
  );
};
