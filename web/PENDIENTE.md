# PENDIENTE — Cimalco Patagonia web

Revision contra email de German y Brief v2.0 — Abril 2026.
Estas son las cosas que faltan, que tienen duda o que requieren decision o asset externo.

---

## ACTIVOS QUE EL CLIENTE TIENE QUE ENTREGAR

### Logo Empresa Neuquina Ley 3338
- El footer y la seccion de credenciales ya mencionan "Empresa Neuquina Ley 3338" en texto
- Falta el logo oficial del certificado (German lo menciona en el email)
- Cuando lo entreguen: colocarlo en la seccion de credenciales (credentials-section.tsx) y en el footer (site-footer.tsx col 1)
- Ruta sugerida: `/public/brand/logo-ley-3338.png`

### Certificado Ley 3338 (PDF o imagen)
- Podria mostrarse como descargable en la pagina de contacto o en la seccion de credenciales
- A confirmar con el cliente si quieren publicarlo

### Fotos especificas necesarias
- **Piezas Industriales / Base AIB**: foto de producto real. Ahora se usa `/site-assets/camaras-de-valvulas.jpg` — puede estar bien pero confirmar con German
- **Bloques HR**: foto especifica del sistema en obra (canal, talud, etc.). Ahora se usa `/site-assets/bloques-hormigon.png` — verificar que sea correcta
- **Servicios**: las 3 tarjetas de servicios usan `/fotos servicios/herobg.png` como imagen base — falta foto especifica de colocacion de adoquines y de montaje de premoldeados en obra

---

## DECISIONES PENDIENTES DEL CLIENTE

### Redes sociales
- La cuenta actual es `@CIMALCONEUQUEN` (en transicion)
- No se muestran links de redes en el sitio (correcto por ahora)
- Cuando se defina el nuevo handle `@CIMALCOPATAGONIA`, agregar en el footer
- Redes sugeridas a activar: Instagram + LinkedIn (segun brief)

### Servicio de construccion de cercos perimetrales
- Aparece en `/servicios` como el tercer servicio
- El email de German y el brief v2.0 NO lo mencionan como servicio activo
- Confirmar: ?es un servicio que ofrecen hoy? ?lo eliminamos?

### Dominio viejo cimalconeuquen.com.ar
- El sitio nuevo ya usa `cimalcopatagonia.com.ar` (correcto)
- Confirmar si el dominio viejo redirige al nuevo (301 redirect)
- Si no: configurar la redireccion en el proveedor de hosting

### Laboratorio de hormigones (Control y Desarrollo de Hormigones)
- El brief dice: "mencionar como respaldo de credibilidad, nunca como producto propio"
- No aparece actualmente en el sitio — a confirmar si lo quieren agregar en alguna seccion institucional

---

## FUNCIONALIDADES NO IMPLEMENTADAS (post-MVP)

### Calculadora m2 / unidades / pallets
- El brief (plan integral de diseno) pide una calculadora para adoquines y bloques
- Logica: el usuario ingresa m2 y el sistema muestra unidades necesarias y cantidad de pallets
- Los datos ya estan en el catalogo (unidades/m2 y m2/pallet por producto)
- No implementado todavia — prioridad media-alta para cuando se active la campana Bloques/Adoquines

### Segmentacion de tipo de cliente en el formulario de contacto
- El brief pide: Particular / Constructora / Municipio como selector en el form
- El formulario actual no tiene ese campo
- Agregar campo "Tipo de cliente" al componente `ContactForm` en `src/components/contact-form.tsx`

### Boton / CTA de WhatsApp
- El brief enfatiza WhatsApp como canal principal ("respondemos en horario laboral")
- No hay boton de WhatsApp flotante en el sitio
- Sugerencia: agregar boton flotante en mobile o incluir numero en el header mobile
- Numero: 299 4422656 o 299 4361973 — confirmar cual va al WhatsApp comercial

### Landing pages de producto (por modelo)
- El plan integral describe paginas tipo `/productos/adoquines/uni-stone-8cm/`
- El usuario definio que esto va despues del MVP actual
- Cuando se implemente: schema Product por modelo, calculadora embebida, selector de color

### Schema markup por producto (Product schema)
- El catalogo tiene schema de CollectionPage pero no Product por modelo
- Cuando se hagan las landing pages, implementar schema Product con specs tecnicas

---

## COSAS VERIFICADAS Y OK

- [x] Dominio: `cimalcopatagonia.com.ar` en seo.ts, emails y links
- [x] "Clientes y referencias" eliminado de la home
- [x] "Hormigon Industrial" no aparece como concepto en ningun componente
- [x] Dos verticales correctas: Energia (Lineas Electricas + Oil & Gas) y Premoldeados
- [x] Vertical Premoldeados actualizado: ahora muestra Piezas Industriales (Base AIB) y Bloques HR
- [x] ProductRows agregado a home (Adoquines, Bloques, Piezas Industriales, Bloques HR)
- [x] Nav link #productos ahora tiene destino real (seccion id="productos" en ProductRows)
- [x] Slogan "Para obras que perduran en Patagonia" presente en hero
- [x] Empresa Neuquina Ley 3338 mencionada en hero metrics, footer y credentials
- [x] IRAM mencionado en hero, vertical cards, catalog
- [x] Venta directa (sin intermediarios) mencionada en contacto y footer
- [x] Footer con dominio correcto, email correcto, mapa, telefono y razon social
- [x] Keywords SEO expandidas con terminos especificos del brief
- [x] Botones de catalogo usan color de vertical (celeste para premoldeados, verde para energia)
- [x] "Bloquera" como termino interno eliminado del tip de contacto

---

## DUDAS TECNICAS

### Imagen Bloques HR
- La imagen actual (`/site-assets/bloques-hormigon.png`) puede ser un bloque comun o un HR
- Si no es la imagen correcta del sistema HR (proteccion de canales/taludes), reemplazarla

### Imagen Piezas Industriales en ProductRows
- Usa `/Lo que fabricamos/camaras y postes.png` — confirmar que esta imagen existe y se ve bien
- Si no existe, usar `/site-assets/camaras-de-valvulas.jpg` en su lugar

### Servicios page — 3 servicios vs brief
- El brief menciona solo 2 servicios: montaje de premoldeados y colocacion de adoquines
- La pagina tiene un tercero: "Construccion de cercos perimetrales" — confirmar si aplica
