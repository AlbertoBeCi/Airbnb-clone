# Análisis de Componentes del Sistema de Diseño de Airbnb

Este documento detalla la descomposición modular de la interfaz de Airbnb basándose en las vistas de navegación, búsqueda y detalle de alojamiento.

---

## 1. Componentes Globales y de Navegación

### `Header / Navbar`
* **Descripción:** Barra de navegación superior con soporte para variantes expandidas (home) y compactas (scroll/búsqueda).
* **Props:**
  * `variant: 'full' | 'compact'`
  * `activeCategoryTab?: string`
  * `userSession?: { name: string; avatarUrl?: string; isHost: boolean }`
  * `onSearchSubmit: (params: SearchParams) => void`
  * `onLanguageChange: () => void`
* **Subcomponentes:**
  * `Logo`: Renderiza el icono/isotipo interactivo con enlace a inicio.
  * `NavTabs`: Selector horizontal de experiencias/alojamientos.
  * `UserActionMenu`: Menú desplegable para perfil, accesos y modo anfitrión.
* **Layout:** `display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 50;` con borde inferior sutil.

---

### `SearchBar`
* **Descripción:** Barra de búsqueda segmentada con selectores modales anidados.
* **Props:**
  * `destination: string`
  * `checkInDate: Date | null`
  * `checkOutDate: Date | null`
  * `guests: { adults: number; children: number; infants: number; pets: number }`
  * `isCompact?: boolean`
  * `onSearch: () => void`
* **Layout:** `display: inline-flex; border-radius: 9999px; box-shadow: ...;` con divisores verticales entre cada sección de entrada y botón de acción circular a la derecha.

---

### `SubheaderStickyNav`
* **Descripción:** Barra secundaria visible durante el scroll en la página de detalle para anclaje a secciones.
* **Props:**
  * `sections: Array<{ id: string; label: string }>`
  * `activeSectionId: string`
  * `listingSummary?: { price: number; rating: number; reviewsCount: number }`
  * `onReserveClick: () => void`
* **Layout:** Barra horizontal fija (`sticky top-0`) dividida en dos columnas: enlaces de navegación interna a la izquierda y mini widget CTA a la derecha.

---

## 2. Componentes de Exploración y Listado

### `FilterBar` & `FilterPill`
* **Descripción:** Barra de filtros deslizables con botones temáticos.
* **Props (`FilterPill`):**
  * `id: string`
  * `label: string`
  * `icon?: ReactNode`
  * `isSelected: boolean`
  * `onClick: (id: string) => void`
* **Layout:** Contenedor horizontal con `overflow-x: auto; white-space: nowrap; gap: 8px;` y botones de control de desplazamiento lateral.

---

### `ListingCard`
* **Descripción:** Tarjeta unitaria de alojamiento con carrusel de imágenes integrado.
* **Props:**
  * `id: string`
  * `images: string[]`
  * `badge?: 'Recomendación del viajero' | 'Superanfitrión' | 'Hotel destacado'`
  * `title: string`
  * `description: string`
  * `datesAvailable?: string`
  * `pricePerNight?: number`
  * `totalPrice: number | string`
  * `rating: number`
  * `reviewsCount?: number`
  * `isFavorite: boolean`
  * `onToggleFavorite: (id: string) => void`
* **Layout:** Tarjeta vertical (`flex-col`) estructurada dentro de un `CSS Grid` responsivo de 2 a 6 columnas según el viewport.

---

### `SplitViewLayout` (Búsqueda con Mapa)
* **Descripción:** Vista combinada de catálogo con mapa interactivo en tiempo real.
* **Props:**
  * `listings: ListingItem[]`
  * `mapCenter: { lat: number; lng: number }`
  * `zoomLevel: number`
  * `hoveredListingId?: string`
* **Layout:**
  * Contenedor maestro con `display: flex; height: calc(100vh - headerHeight);`.
  * **Columna izquierda (~55%):** Scroll vertical independiente con la cuadrícula de tarjetas de alojamiento.
  * **Columna derecha (~45%):** Posición fija/adherida con renderizado del mapa (`Google Maps / Mapbox`) y marcadores de precio.

---

## 3. Componentes de la Vista de Detalle (Listing Detail)

### `PhotoGalleryGrid`
* **Descripción:** Cuadrícula de presentación visual de fotografías destacadas.
* **Props:**
  * `photos: Array<{ id: string; url: string; alt: string }>`
  * `onOpenGalleryModal: () => void`
* **Layout:** `CSS Grid` asimétrico de 5 posiciones (1 celda principal grande a la izquierda ocupando 2 filas y 2 columnas + 4 celdas menores cuadradas a la derecha) con botón `Mostrar todas las fotos` en `position: absolute; bottom: 16px; right: 16px;`.

---

### `BookingFloatingWidget` (Sidebar de Reserva)
* **Descripción:** Tarjeta interactiva de cálculo y confirmación de reserva.
* **Props:**
  * `priceTotal: number`
  * `currency: string`
  * `rating: number`
  * `reviewsCount: number`
  * `checkInDate: Date | null`
  * `checkOutDate: Date | null`
  * `guestsSummary: string`
  * `urgencyNotice?: string`
  * `onReserveSubmit: () => void`
* **Layout:** Contenedor con borde y sombra (`border-radius: 12px;`) montado en `position: sticky; top: 90px;` dentro de la columna lateral derecha (~35% de ancho).

---

### `HostProfileCard`
* **Descripción:** Módulo de validación, reputación y biografía del anfitrión.
* **Props:**
  * `hostName: string`
  * `avatarUrl: string`
  * `isSuperhost: boolean`
  * `reviewsCount: number`
  * `rating: number`
  * `yearsHosting: number`
  * `languages: string[]`
  * `responseRate?: string`
  * `bio?: string`
* **Layout:** Estructura de tarjeta en `CSS Grid` con panel de estadísticas destacado a la izquierda y resumen biográfico/contacto a la derecha.

---

### `AmenitiesGrid`
* **Descripción:** Cuadrícula de servicios y equipamiento del alojamiento.
* **Props:**
  * `amenities: Array<{ id: string; label: string; icon: ReactNode }>`
  * `onShowAllModal: () => void`
* **Layout:** `display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;` con filas alineadas en `flex; align-items: center; gap: 12px;`.

---

### `ReviewsSection` & `RatingsBreakdown`
* **Descripción:** Panel de valoraciones globales desglosadas por métrica y listado de reseñas de huéspedes.
* **Props (`RatingsBreakdown`):**
  * `overallScore: number`
  * `totalReviews: number`
  * `breakdown: Array<{ category: string; score: number; icon: ReactNode }>`
* **Props (`ReviewCard`):**
  * `author: { name: string; avatar: string; tenure: string }`
  * `rating: number`
  * `date: string`
  * `comment: string`
* **Layout:**
  * Barra de desglose superior en flex horizontal con divisores verticales.
  * Muro de comentarios en cuadrícula de 2 columnas (`grid-template-columns: 1fr 1fr; gap: 32px;`).

  ### El Perfil del Usuario y su Objetivo
El usuario es un viajero que entra a la plataforma con el objetivo de alquilar una habitación cómoda para su próxima escapada. Su prioridad es encontrar un alojamiento que se ajuste a su presupuesto, por lo que necesita visualizar de forma clara y directa **el precio total que le va a costar**. Además, es crucial para él saber **por cuánto tiempo máximo o mínimo está disponible** la habitación y comprobar, a través de los calendarios interactivos, si el alojamiento **está disponible exactamente en las fechas en las que lo necesita** antes de proceder con el pago.

---

### 1. Página de Inicio (Home)
La página de inicio está diseñada para inspirar al usuario y facilitarle el inicio de su búsqueda. 
* **Qué muestra:** En la parte superior destaca el **`Header / Navbar`** en su variante expandida, dando protagonismo a la **`SearchBar`** donde el usuario puede introducir su destino, las fechas en las que necesita la habitación y el número de viajeros. El resto de la página está compuesto por el componente **`FilterBar`** (con iconos de categorías temáticas) y varias cuadrículas o carruseles llenos de **`ListingCard`**. Estas tarjetas muestran de un vistazo la foto principal, la ubicación, el precio por noche y la valoración, permitiendo al usuario empezar a explorar opciones populares inmediatamente.

### 2. Página de Catálogo (Resultados de Búsqueda)
Esta vista se activa una vez que el usuario ha introducido un destino y unas fechas concretas. Está orientada a la comparación y al filtrado de opciones.
* **Qué muestra:** Utiliza el **`SplitViewLayout`** para aprovechar toda la pantalla. En la parte superior, el **`Header`** se vuelve compacto y se acompaña de una **`FilterBar`** con botones (`FilterPill`) detallados para afinar la búsqueda (precio, wifi, cancelación gratuita). La pantalla se divide en dos: la mitad izquierda es una lista scrolleable repleta de **`ListingCard`** que cumplen con los requisitos de fecha y disponibilidad del usuario. La mitad derecha muestra un **`InteractiveMap`** fijo que actualiza dinámicamente los precios de las habitaciones según la zona del mapa que el usuario esté mirando, ayudándole a decidir por ubicación y coste.

### 3. Página de Vista de Detalle (Habitación)
Es la página de conversión donde el usuario evalúa a fondo la habitación elegida y confirma si cumple todas sus necesidades para realizar la reserva.
* **Qué muestra:** Inicia con un **`ListingHeader`** con el título de la habitación y un gran **`PhotoGalleryGrid`** para ver el espacio en detalle. Al hacer scroll hacia abajo, aparece el **`SubheaderStickyNav`** para navegar por la página y la interfaz se divide según el `MainDetailLayout`:
  * **Columna principal (Izquierda):** Muestra toda la información descriptiva. Incluye el **`AmenitiesGrid`** (servicios que ofrece), la sección de fechas con el **`DatePickerCalendar`** (donde comprueba por cuánto tiempo está disponible), la **`ReviewsSection`** para leer experiencias de otros, y el **`HostProfileCard`** para conocer a su anfitrión.
  * **Columna lateral (Derecha):** Aquí se encuentra el componente más importante para su objetivo, el **`BookingFloatingWidget`**. Esta tarjeta se queda fija en la pantalla y le muestra un desglose transparente del precio total que le va a costar, confirma las fechas exactas que introdujo y le ofrece el botón final para "Reservar".
