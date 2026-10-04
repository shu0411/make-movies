import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

import {getMitosisMotion, MITOSIS_ORB_SIZE} from '../mitosis-motion';

const COLORS = ['#d8f7ff', '#9de8ff', '#b7a6ff', '#f0b7ff'] as const;
const PRIMARY_COUNT = 4;
const CHILD_COUNT = 16;

const ease = (value: number) => value * value * (3 - 2 * value);

const GlowOrb = ({
  x,
  y,
  size,
  color,
  opacity,
  rotation,
}: {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  rotation: number;
}) => (
  <div
    style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: size,
      height: size,
      opacity,
      borderRadius: '50%',
      background: `radial-gradient(circle at 34% 28%, #ffffff 0%, ${color} 28%, rgba(108, 92, 231, 0.3) 62%, transparent 72%)`,
      boxShadow: `0 0 ${size * 0.42}px ${color}, 0 0 ${size}px rgba(120, 95, 255, 0.34)`,
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg)`,
      transformOrigin: 'center',
    }}
  />
);

export const LuminousMitosis = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const {phase, split, orbitAngle, glow} = getMitosisMotion(
    frame,
    durationInFrames,
  );
  const spread = ease(split);
  const childReveal = ease(Math.max(0, Math.min(1, (split - 0.42) / 0.58)));
  const coreOpacity = 1 - spread * 0.82;

  return (
    <AbsoluteFill
      style={{
        background:
          'radial-gradient(circle at 50% 48%, #17163f 0%, #090b24 38%, #03040f 74%, #010207 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -240,
          opacity: 0.2 + glow * 0.09,
          background:
            'conic-gradient(from 30deg at 50% 50%, transparent, rgba(113, 91, 255, 0.18), transparent 22%, rgba(73, 214, 255, 0.13), transparent 48%, rgba(231, 129, 255, 0.13), transparent 75%)',
          transform: `rotate(${phase * 360}deg)`,
        }}
      />

      {[300, 520, 760].map((size, index) => (
        <div
          key={size}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: size + spread * index * 36,
            height: size + spread * index * 36,
            border: `${index === 0 ? 2 : 1}px solid rgba(157, 232, 255, ${0.22 - index * 0.045})`,
            borderRadius: '50%',
            transform: `translate(-50%, -50%) rotate(${phase * (index % 2 === 0 ? 360 : -360)}deg)`,
            boxShadow: 'inset 0 0 30px rgba(131, 107, 255, 0.08)',
          }}
        />
      ))}

      {Array.from({length: PRIMARY_COUNT}, (_, index) => {
        const angle = orbitAngle + (index * Math.PI * 2) / PRIMARY_COUNT;
        const radius = 218 * spread;
        return (
          <GlowOrb
            key={`primary-${index}`}
            x={Math.cos(angle) * radius}
            y={Math.sin(angle) * radius}
            size={MITOSIS_ORB_SIZE}
            color={COLORS[index]}
            opacity={spread}
            rotation={(angle * 180) / Math.PI + 45}
          />
        );
      })}

      {Array.from({length: CHILD_COUNT}, (_, index) => {
        const group = Math.floor(index / 4);
        const branch = index % 4;
        const baseAngle = orbitAngle + (group * Math.PI * 2) / PRIMARY_COUNT;
        const fanAngle = baseAngle + (branch - 1.5) * 0.24 * childReveal;
        const radius = 218 * spread + childReveal * (105 + branch * 30);
        return (
          <GlowOrb
            key={`child-${index}`}
            x={Math.cos(fanAngle) * radius}
            y={Math.sin(fanAngle) * radius}
            size={MITOSIS_ORB_SIZE}
            color={COLORS[group]}
            opacity={childReveal * (0.56 + (index % 4) * 0.1)}
            rotation={(fanAngle * 180) / Math.PI + phase * 720}
          />
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: MITOSIS_ORB_SIZE,
          height: MITOSIS_ORB_SIZE,
          opacity: coreOpacity,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 34% 28%, #ffffff 0%, #c9f5ff 20%, #9e8cff 54%, rgba(112, 79, 255, 0.2) 70%, transparent 74%)',
          boxShadow:
            '0 0 34px #c5f5ff, 0 0 100px rgba(145, 117, 255, 0.8), 0 0 210px rgba(75, 187, 255, 0.4)',
          transform: `translate(-50%, -50%) rotate(${phase * 720 + 45}deg)`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 112 + spread * 610,
          height: 112 + spread * 610,
          border: '1px solid rgba(218, 245, 255, 0.18)',
          borderRadius: '50%',
          opacity: 0.9 - spread * 0.48,
          transform: 'translate(-50%, -50%)',
          boxShadow:
            '0 0 42px rgba(178, 224, 255, 0.22), inset 0 0 42px rgba(178, 132, 255, 0.16)',
        }}
      />
    </AbsoluteFill>
  );
};
