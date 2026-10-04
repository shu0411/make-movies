import {describe, expect, it} from 'vitest';

import {
  geometricOrbitComposition,
  geometricPulseComposition,
  luminousMitosisComposition,
  mainComposition,
} from './video-config';

describe('メインコンポジション', () => {
  it('フルHD・30fps・5秒の動画設定を提供する', () => {
    expect(mainComposition).toEqual({
      id: 'Main',
      width: 1920,
      height: 1080,
      fps: 30,
      durationInFrames: 150,
    });
  });
});

describe('幾何学モーションコンポジション', () => {
  it.each([
    ['GeometricPulse', geometricPulseComposition],
    ['GeometricOrbit', geometricOrbitComposition],
    ['LuminousMitosis', luminousMitosisComposition],
  ])('%s をフルHD・30fps・5秒で提供する', (id, composition) => {
    expect(composition).toEqual({
      id,
      width: 1920,
      height: 1080,
      fps: 30,
      durationInFrames: 150,
    });
  });
});
