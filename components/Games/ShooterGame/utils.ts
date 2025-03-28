export const musicFiles = ["/game/shooterbg1.mp3"];
export const planeOptions = [1, 2, 3].map(
  (num) => `/game/shooterGame/jet-plane${num}.png`
);
export const balloonOptions = [1, 2, 3].map((num) => ({
  src: `/game/shooterGame/baloon${num}.png`,
  points: num,
}));
export const powerUpOptions = [
  {
    src: "/game/shooterGame/powerup1.png",
    type: "bullet" as const,
  },
];

export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 600;