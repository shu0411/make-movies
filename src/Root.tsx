import {Composition} from 'remotion';

import {Main} from './compositions/Main';
import {mainComposition} from './video-config';

export const RemotionRoot = () => {
  return <Composition {...mainComposition} component={Main} />;
};
