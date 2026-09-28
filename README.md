<div align="center">

# Fiyasis UI

A modern, accessible **React + Tailwind CSS** component library.

[![Made by Fiyasis](https://img.shields.io/badge/Made%20by-Fiyasis-0A66C2?style=flat-square)](https://www.fiyasis.com)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)

</div>

## ✨ Components

| Component | Description |
| --- | --- |
| `Button` | 5 variants, 3 sizes, loading state |
| `Card` | Header / Title / Content / Footer composition |
| `Badge` | 5 color variants |
| `Input` | Label + inline error message |
| `Alert` | Info / success / warning / error |
| `Avatar` | Image or initials fallback |
| `Spinner` | 3 sizes |

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the showcase (live demo)
npm run dev

# production build
npm run build
```

## 📦 Usage

Copy any component from `src/components` into your project, or import directly:

```tsx
import { Button, Card, CardContent, Input } from "./src/components";

export function Example() {
  return (
    <Card>
      <CardContent className="space-y-4">
        <Input label="Email" placeholder="you@fiyasis.com" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}
```

Components rely on the `cn()` helper (`src/lib/cn.ts`) and the `brand` color
defined in `tailwind.config.js`. Make sure both exist in your project, or use
the built-in value `#0A66C2`.

## 🎨 Design tokens

| Token | Value |
| --- | --- |
| `brand` | `#0A66C2` |
| `brand-dark` | `#084d94` |

## 📄 License

MIT © Fiyasis
