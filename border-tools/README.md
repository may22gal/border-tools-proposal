# Border Tools — Plan de Expansión Digital
### Presentado por Mayra Galván | Ecommerce & Digital Operations Consultant

Sitio web de propuesta ejecutiva construido con Next.js 14, Tailwind CSS y Framer Motion.

---

## 🚀 Deploy en Vercel (5 minutos)

### Paso 1 — Subir a GitHub

1. Ve a [github.com](https://github.com) y crea una cuenta si no tienes
2. Haz clic en **"New repository"** (botón verde)
3. Nombre: `border-tools-proposal`
4. Deja todo por defecto → clic en **"Create repository"**
5. En la siguiente pantalla, GitHub te dará instrucciones para subir archivos

**Opción fácil — Subir desde la interfaz web:**
- En tu repo nuevo, haz clic en **"uploading an existing file"**
- Arrastra TODOS los archivos de esta carpeta
- Clic en **"Commit changes"**

---

### Paso 2 — Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Crea cuenta con tu cuenta de GitHub (es gratis)
3. Clic en **"New Project"**
4. Selecciona el repo `border-tools-proposal`
5. Vercel detecta automáticamente que es Next.js
6. Clic en **"Deploy"**

✅ En 2-3 minutos tienes tu sitio en vivo con una URL tipo:
`https://border-tools-proposal.vercel.app`

---

### Paso 3 — Dominio propio (cuando lo compres)

Una vez que tengas tu dominio (ej. en GoDaddy o Namecheap):
1. En Vercel → Settings → Domains
2. Agrega tu dominio
3. Copia los DNS que te da Vercel
4. En GoDaddy → DNS → Pega los registros

---

## 🛠️ Desarrollo local (opcional)

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Abrir en navegador
http://localhost:3000

# Build para producción
npm run build
```

**Requisitos:** Node.js 18+ y npm

---

## 📁 Estructura del proyecto

```
border-tools/
├── app/
│   ├── layout.tsx          ← Fuentes, SEO metadata
│   ├── page.tsx            ← Página principal (ensambla secciones)
│   └── globals.css         ← Estilos globales + utilidades
├── components/
│   ├── Navbar.tsx          ← Navegación fija con scroll
│   ├── Hero.tsx            ← Hero + dashboard preview
│   ├── Analysis.tsx        ← Análisis del negocio
│   ├── Competitors.tsx     ← Análisis de competidores
│   ├── Combos.tsx          ← Estrategia de combos
│   ├── Infrastructure.tsx  ← Infraestructura digital
│   ├── WebsiteStrategy.tsx ← Estrategia web + SEO
│   ├── MarketStrategy.tsx  ← Mercado Libre + USA
│   ├── AdsAndContent.tsx   ← Meta Ads + contenido
│   ← Costs.tsx             ← Costos estimados
│   ├── Collaboration.tsx   ← Opciones de colaboración
│   └── FinalVision.tsx     ← Visión final + footer
├── public/                 ← Imágenes (agregar fotos reales aquí)
├── package.json
├── tailwind.config.js
└── next.config.js
```

---

## ✏️ Cómo personalizar

### Cambiar información de contacto
Editar `components/Collaboration.tsx` → buscar `href="mailto:..."` y reemplazar con tu email real.

### Agregar tu foto o logo
Coloca imágenes en `/public/` y referéncialas con `<img src="/tu-imagen.jpg" />`.

### Cambiar colores
En `tailwind.config.js` → sección `colors` → modificar valores de `gold`, `bg`, etc.

### Cambiar precios/costos
Editar `components/Costs.tsx` → array `costs[]`.

### Cambiar combos
Editar `components/Combos.tsx` → array `combos[]`.

---

## 🎨 Stack tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 14 (App Router) | Framework principal |
| Tailwind CSS | Estilos y diseño |
| Framer Motion | Animaciones |
| Lucide React | Iconos |
| TypeScript | Tipado |
| Vercel | Hosting gratuito |

---

## 📧 Contacto

**Mayra Galván**  
Ecommerce & Digital Operations Consultant  
Propuesta para Border Tools — 2025–2026

---

*Documento confidencial — Solo para uso interno de Border Tools*
