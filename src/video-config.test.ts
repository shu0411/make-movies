import {describe, expect, it} from 'vitest';

import {mainComposition} from './video-config';

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
