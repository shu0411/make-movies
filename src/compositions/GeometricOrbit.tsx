import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

const orbitSizes = [270, 470, 690, 920] as const;
const satellites = [
  {radius: 135, size: 34, speed: 2.2, color: '#56f0d0'},
  {radius: 235, size: 54, speed: -1.25, color: '#b782ff'},
  {radius: 345, size: 27, speed: 0.82, color: '#ff5d8f'},
  {radius: 460, size: 42, speed: -0.56, color: '#70a1ff'},
] as const;

export const GeometricOrbit = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const fade = interpolate(frame, [130, 149], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const coreScale = 1 + Math.sin((frame / 30) * Math.PI * 2) * 0.08;

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        background:
          'radial-gradient(circle at 50% 50%, #15214e 0%, #080d24 42%, #030611 100%)',
        color: '#e9f2ff',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: fade,
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.18,
          backgroundImage:
            'linear-gradient(rgba(112,161,255,.26) 1px, transparent 1px), linear-gradient(90deg, rgba(112,161,255,.26) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: `perspective(700px) rotateX(62deg) scale(1.7) translateY(${110 + frame * 0.7}px)`,
          transformOrigin: '50% 70%',
        }}
      />

      <div
        style={{
          position: 'relative',
          width: 1000,
          height: 1000,
          transform: `scale(${0.72 + reveal * 0.28}) rotate(${frame * 0.08}deg)`,
          opacity: reveal,
        }}
      >
        {orbitSizes.map((size, index) => (
          <div
            key={size}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: size,
              height: size,
              border: `${index === 2 ? 3 : 2}px solid rgba(125, 199, 255, ${0.5 - index * 0.07})`,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow:
                index === 2 ? '0 0 24px rgba(86, 240, 208, 0.18)' : 'none',
            }}
          />
        ))}

        {satellites.map((satellite, index) => {
          const angle = frame * satellite.speed + index * 72;
          return (
            <div
              key={satellite.radius}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: satellite.radius * 2,
                height: satellite.radius * 2,
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              }}
            >
              <div
                style={{
                  width: satellite.size,
                  height: satellite.size,
                  marginLeft: '50%',
                  transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                  backgroundColor: satellite.color,
                  borderRadius: index % 2 === 0 ? '50%' : '8px',
                  boxShadow: `0 0 28px ${satellite.color}`,
                }}
              />
            </div>
          );
        })}

        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 178,
            height: 178,
            background:
              'linear-gradient(135deg, #56f0d0, #4976ff 55%, #b782ff)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            transform: `translate(-50%, -50%) rotate(${45 + frame * 1.1}deg) scale(${coreScale})`,
            boxShadow: '0 0 70px rgba(86, 240, 208, 0.7)',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 86,
          bottom: 70,
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: 8,
          opacity: 0.75,
        }}
      >
        SYSTEM 02 / ORBITAL FIELD
      </div>
      <div
        style={{
          position: 'absolute',
          right: 82,
          top: 62,
          fontSize: 18,
          letterSpacing: 5,
          lineHeight: 1.7,
          textAlign: 'right',
          opacity: 0.6,
        }}
      >
        X 1920.00
        <br />Y 1080.00
      </div>
    </AbsoluteFill>
  );
};
