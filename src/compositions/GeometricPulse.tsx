import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const COLORS = {
  ink: '#182433',
  paper: '#f4e9d6',
  red: '#f0523b',
  yellow: '#f5c343',
  blue: '#1c63a8',
} as const;

const shapeBase: React.CSSProperties = {
  position: 'absolute',
  boxSizing: 'border-box',
};

export const GeometricPulse = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const beat = (frame % 30) / 30;
  const pulse = Math.sin(beat * Math.PI);
  const entrance = spring({
    frame,
    fps,
    config: {damping: 13, stiffness: 90, mass: 0.8},
  });
  const sceneRotation = interpolate(frame, [0, 149], [-8, 18], {
    easing: Easing.inOut(Easing.cubic),
  });
  const closing = interpolate(frame, [128, 149], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.paper,
        color: COLORS.ink,
        overflow: 'hidden',
        opacity: closing,
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          ...shapeBase,
          inset: 46,
          border: `4px solid ${COLORS.ink}`,
        }}
      />

      {Array.from({length: 13}, (_, index) => (
        <div
          key={`line-${index}`}
          style={{
            ...shapeBase,
            left: 56 + index * 150,
            top: 0,
            width: 2,
            height: '100%',
            backgroundColor: COLORS.ink,
            opacity: 0.08,
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 760,
          height: 760,
          transform: `translate(-50%, -50%) rotate(${sceneRotation}deg) scale(${0.5 + entrance * 0.5})`,
        }}
      >
        <div
          style={{
            ...shapeBase,
            left: 175,
            top: 175,
            width: 410,
            height: 410,
            border: `52px solid ${COLORS.blue}`,
            borderRadius: '50%',
            transform: `scale(${0.9 + pulse * 0.12})`,
          }}
        />
        <div
          style={{
            ...shapeBase,
            left: 38,
            top: 62,
            width: 255,
            height: 255,
            backgroundColor: COLORS.red,
            transform: `rotate(${frame * 1.35}deg)`,
          }}
        />
        <div
          style={{
            ...shapeBase,
            right: 0,
            top: 30,
            width: 0,
            height: 0,
            borderLeft: '145px solid transparent',
            borderRight: '145px solid transparent',
            borderBottom: `270px solid ${COLORS.yellow}`,
            transform: `rotate(${-frame * 1.6}deg) translateY(${pulse * 24}px)`,
          }}
        />
        <div
          style={{
            ...shapeBase,
            left: 56,
            bottom: 22,
            width: 270,
            height: 135,
            backgroundColor: COLORS.ink,
            borderRadius: '150px 150px 0 0',
            transform: `translateX(${pulse * 36}px) rotate(-12deg)`,
          }}
        />
        <div
          style={{
            ...shapeBase,
            right: 78,
            bottom: 36,
            width: 168,
            height: 168,
            backgroundColor: COLORS.paper,
            border: `26px solid ${COLORS.red}`,
            transform: `rotate(${45 + frame * 2.2}deg)`,
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 94,
          top: 84,
          fontSize: 24,
          fontWeight: 800,
          letterSpacing: 7,
        }}
      >
        FORM / RHYTHM
      </div>
      <div
        style={{
          position: 'absolute',
          right: 90,
          bottom: 72,
          fontSize: 94,
          fontWeight: 900,
          letterSpacing: -7,
          lineHeight: 0.85,
          textAlign: 'right',
        }}
      >
        GEOMETRIC
        <br />
        PULSE
      </div>
    </AbsoluteFill>
  );
};
