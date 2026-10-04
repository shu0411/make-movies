import {ThemeProvider, createTheme} from '@mui/material/styles';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});

export const Main = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame, fps, config: {damping: 16}});
  const opacity = interpolate(frame, [105, 135], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <ThemeProvider theme={theme}>
      <AbsoluteFill
        style={{
          alignItems: 'center',
          background:
            'linear-gradient(135deg, #090e22 0%, #20145a 55%, #006d77 100%)',
          color: '#ffffff',
          justifyContent: 'center',
          opacity,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            transform: `scale(${interpolate(entrance, [0, 1], [0.8, 1])})`,
          }}
        >
          <div
            style={{
              color: '#7de2d1',
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: 10,
              marginBottom: 28,
            }}
          >
            REMOTION
          </div>
          <div style={{fontSize: 112, fontWeight: 800, letterSpacing: -4}}>
            動画制作を始めよう
          </div>
          <div style={{fontSize: 34, marginTop: 32, opacity: 0.78}}>
            Reactで、フレームごとに描く。
          </div>
        </div>
      </AbsoluteFill>
    </ThemeProvider>
  );
};
