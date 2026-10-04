import {describe, expect, it} from 'vitest';

import {getMitosisMotion, MITOSIS_ORB_SIZE} from './mitosis-motion';

describe('Luminous Mitosisのループモーション', () => {
  it('すべての分裂段階で共通の図形サイズを使用する', () => {
    expect(MITOSIS_ORB_SIZE).toBe(68);
  });

  it('周期の開始と終了で同じ状態に戻る', () => {
    expect(getMitosisMotion(0, 150)).toEqual(getMitosisMotion(149, 150));
  });

  it('中間地点で分裂が最大になる', () => {
    const motion = getMitosisMotion(74.5, 150);

    expect(motion.split).toBeCloseTo(1);
    expect(motion.orbitAngle).toBeCloseTo(Math.PI * 2);
  });

  it('四分の一地点では分裂の途中になる', () => {
    const motion = getMitosisMotion(37.25, 150);

    expect(motion.split).toBeCloseTo(0.5);
    expect(motion.glow).toBeGreaterThan(0);
  });
});
