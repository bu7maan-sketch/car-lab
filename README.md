# CAR LAB — Build • Paint • Customize • Drive

MVP interactive 3D car customizer (React + Vite + TS + Three.js + R3F + Drei + Zustand + Tailwind).

## Run

Need Node 18+:

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Flow

HOME → SELECT CAR → 3D GARAGE (paint / wheels / height / logo / lights / engine) → SAVE → FINAL REVEAL

- Procedural cars (no .glb needed). `src/data/cars.ts` = CarConfig ready to swap with .glb later.
- Builds saved to localStorage. Photo Mode exports PNG.
- Sounds are WebAudio synth — no assets.

## Structure

- `src/components/3d` — CarModel (procedural), GarageScene (studio, lights, camera rig)
- `src/components/ui` — Home / Select / Garage / Reveal / Toast
- `src/data` — cars, paints, wheels, logos
- `src/store` — zustand garage store
- `src/utils` — sound synth, storage
