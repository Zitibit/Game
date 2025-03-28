export const musicFiles = ["/zitibit/shooterbg1.mp3"];
export const planeOptions = [1, 2, 3].map(
  (num) => `/zitibit/shooterGame/jet-plane${num}.png`
);
export const balloonOptions = [1, 2, 3].map((num) => ({
  src: `/zitibit/shooterGame/baloon${num}.png`,
  points: num,
}));
export const powerUpOptions = [
  {
    src: "/zitibit/shooterGame/powerup1.png",
    type: "bullet" as const,
  },
];

export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 600;