export type MitosisMotion = {
  phase: number;
  split: number;
  orbitAngle: number;
  glow: number;
};

export const MITOSIS_ORB_SIZE = 68;

export const getMitosisMotion = (
  frame: number,
  durationInFrames: number,
): MitosisMotion => {
  const lastFrame = Math.max(1, durationInFrames - 1);
  const phase = (frame % lastFrame) / lastFrame;
  const split = (1 - Math.cos(phase * Math.PI * 2)) / 2;

  return {
    phase,
    split,
    orbitAngle: phase * Math.PI * 4,
    glow: (1 + Math.sin(phase * Math.PI * 4)) / 2,
  };
};
