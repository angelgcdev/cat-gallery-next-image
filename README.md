# Cat Gallery Lab

Proyecto de practica para entender `next/image` con una galeria de gatitos usando [The Cat API](https://thecatapi.com/).

## Objetivo de aprendizaje

Este proyecto esta enfocado en reforzar estos conceptos:

- `width` y `height` en `Image` describen el tamano intrinseco, no el tamano visual final.
- El tamano renderizado se controla con CSS (`w-full`, `h-full`, `object-cover`, etc.).
- `sizes` ayuda al navegador a elegir la imagen adecuada para cada viewport.
- `fill` funciona cuando el contenedor define el espacio visual.

## Rutas principales

- `/`: galeria con paginacion por query param (`?page=0`, `?page=1`, ...)
- `/cats/[id]`: detalle de un gatito
- `/playground`: comparacion de patrones de `next/image`

## Configuracion

1. Instalar dependencias:

```bash
npm install
```

2. (Opcional) Configurar API key:

```bash
cp .env.example .env.local
```

Despues, edita `.env.local` y agrega:

```bash
CAT_API_KEY=tu_api_key
```

> Sin API key tambien funciona en modo basico, pero con limites mas estrictos.

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Verificacion

```bash
npm run lint
```
