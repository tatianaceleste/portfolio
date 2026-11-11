/* =========================================================
   1. DATOS: edita aquí tus proyectos
   ---------------------------------------------------------
   cat:  '3d' | 'script' | 'ps'
   size: 'lg' | 'wide' | 'tall' | 'md'  (tamaño en la galería)
   Cada imagen es { src, w, h }. Si "src" está vacío se genera un
   placeholder con esas proporciones. Sustituye "src" por tu ruta,
   por ejemplo: 'img/robot-render.jpg'
   ========================================================= */
const PROJECTS = [
  {
    id: 'p1', cat: '3d', size: 'lg', title: 'Pilar / Columna', year: '2026',
    tools: ['Blender', 'Free PBR Materials'],
    cover: { src: 'https://res.cloudinary.com/ffzapeqa/image/upload/pilar_close-up.png', w: 1280, h: 720 },
    render: { src: 'https://res.cloudinary.com/ffzapeqa/image/upload/ar_9:16,c_auto/f_auto/q_auto/pilar_vertical.png', w: 720, h: 1280 },
    wire:   { src: 'https://res.cloudinary.com/ffzapeqa/image/upload/ar_9:16,c_auto/c_auto,h_1280,w_720/pilar_wireframe.png', w: 720, h: 1280 },
    info: { 'Polígonos': '4096 triángulos', 'Texturas': '4K, PBR', 'Render': 'Cycles', 'Tiempo': '1 semana' },
    notes: 'Asset mid-high poly de un pilar / columna hecho con la intención de ser usado para animaciones 3D.',
    // Descarga en página externa: lista de enlaces
    downloads: [
      { label: 'Descargar en Gumroad', url: 'https://tatianaceleste.gumroad.com/l/columna3d' }
    ]
  },
  {
    id: 'p2', cat: 'script', size: 'wide', title: 'Generador de Contraseñas', year: '2026',
    tools: ['Python'],
    cover: { src: 'https://res.cloudinary.com/ffzapeqa/image/upload/pythonlogo.jpg', w: 680, h: 459 },
    problem: 'Este script ayuda a generar contraseñas seguras a partir de una palabra o contraseña que ya uses. Usa un sistema de cifrado César, que es un cifrado de sustitución por desplazamiento.',
    code: `from random import randint
import os

chars = "!#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
chars = list(chars)

encrypted_message = ""

def get_new_encrypted(base_name="encriptado", ext=".txt"):
    i = 0
    while True:
        if i == 0:
            new_filename = f"{base_name}{ext}"
        else:
            new_filename = f"{base_name}{i}{ext}"
        if not os.path.exists(new_filename):
            return new_filename
        i += 1

def get_new_decrypted(base_name="desencriptado", ext=".txt"):
    i = 0
    while True:
        if i == 0:
            new_filename = f"{base_name}{ext}"
        else:
            new_filename = f"{base_name}{i}{ext}"
        if not os.path.exists(new_filename):
            return new_filename
        i += 1


while True:
    print("Bienvenido/a al script de generador de contraseñas de Tatiana. Elige una opción:")
    print("1. Encriptar")
    print("2. Desencriptar")
    print("3. Salir")
    print()
    choice = input("Introduce tu opción: ")

    if choice == "1":
        print("- Encripción -")
        print()

        while True:
            rorm = input("Quieres usar una llave manual o aleatoria?? (a/m): ").lower()
            if rorm in ["a", "m"]:
                break
            print("Valor no válido, introduce \'a\' o \'m\'")


        if rorm == "a":
            keys = randint(1, 92)
            used_key = keys
            message_to_encrypt = input("Introduce el mensaje para encriptar: ")
            encrypted_message = ""
            for char in message_to_encrypt:
                if char in chars:
                    position = chars.index(char)
                    cipher_char = chars[(position + keys) % len(chars)]
                    encrypted_message += cipher_char
                else:
                    encrypted_message += char
            print()
            print(f"Tu mensaje encriptado es \'{encrypted_message}\'")
            print(f"Tu llave es \'{used_key}\'")
            print()
            save = input("¿Quieres guardar una copia del mensaje y la llave? (s/n): ").lower()

            if save == "s":
                filename = get_new_encrypted()
                with open(filename, "w") as f:
                    f.write(str(f"Mensaje encriptado: {encrypted_message}") + "\\n")
                    f.write(str(f"Llave: {used_key}") + "\\n")
                print(f"Guardado como {filename}")
            elif save == "n":
                continue

        elif rorm == "m":
            while True:
                manual_key = int(input("Introduce tu llave aquí: "))
                if manual_key == 93:
                    print("La llave no puede ser 93, sería el mismo mensaje, intentalo con otro número.")
                else:
                    break
            used_key = manual_key
            message_to_encrypt = input("Introduce el mensaje para encriptar: ")
            encrypted_message = ""
            for char in message_to_encrypt:
                if char in chars:
                    position = chars.index(char)
                    cipher_char = chars[(position + manual_key) % len(chars)]
                    encrypted_message += cipher_char
                else:
                    encrypted_message += char
            print()
            print(f"Tu mensaje encriptado es \'{encrypted_message}\'")
            print(f"Tu llave es \'{used_key}\'")
            print()
            save = input("¿Quieres guardar una copia del mensaje y la llave? (s/n): ").lower()

            if save == "s":
                filename = get_new_encrypted()
                with open(filename, "w") as f:
                    f.write(str(f"Mensaje encriptado: {encrypted_message}") + "\\n")
                    f.write(str(f"Llave: {used_key}") + "\\n")
                print(f"Guardado como {filename}")
            elif save == "n":
                continue

    elif choice == "2":
        print("- Desencripción -")
        print()
        key_insert = int(input("Inserta tu llave aquí: "))
        message_to_decrypt = input("Insert el mensaje para desencriptar: ")
        decrypted_message = ""
        for char in message_to_decrypt:
            if char in chars:
                cipher_char = chars.index(char)
                cipher_char = chars[(cipher_char - key_insert) % len(chars)]
                decrypted_message += cipher_char
            else:
                decrypted_message += char
        print()
        print(f"Tu mensaje desencriptado es: \'{decrypted_message}\'")
        print()
        save = input("¿Quieres guardar la llave, el mensaje encriptado y el desencriptado? (s/n): ").lower()

        if save == "s":
            filename = get_new_decrypted()
            with open(filename, "w") as f:
                f.write(str(f"Mensaje encriptado: {message_to_decrypt}") + "\\n")
                f.write(str(f"Mensaje desencriptado: {decrypted_message}") + "\\n")
                f.write(str(f"Llave: {key_insert}") + "\\n")
            print(f"Guardado como {filename}")
        elif save == "n":
            continue


    elif choice == "3":
        print("Saliendo...")
        break


    else:
        print()
        print("Introduce una opción valida (1, 2 o 3): ")
        print()
        continue`,
    github: 'https://github.com/tatianaceleste/passgen'
  }
];

const LABELS = { '3d': 'Modelado 3D', script: 'Scripts & Tools' };

/* =========================================================
   2. UTILIDADES
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);

/* Crea un helper para elementos con texto seguro (sin innerHTML) */
function el(tag, props = {}, ...children) {
  const n = Object.assign(document.createElement(tag), props);
  children.forEach(c => n.append(c));
  return n;
}

/* Devuelve la ruta real o un placeholder SVG con la proporción indicada */
function imgSrc({ src, w, h }, label = '') {
  if (src) return src;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="100%" height="100%" fill="#c9c9c4"/>
    <path d="M0 0L${w} ${h}M${w} 0L0 ${h}" stroke="#b5b5b0" stroke-width="2"/>
    <text x="50%" y="50%" fill="#6b6b66" font-family="monospace" font-size="${Math.round(w / 40)}" text-anchor="middle">${label} ${w}×${h}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function figure(image, caption, alt) {
  const img = el('img', { src: imgSrc(image, caption), alt, loading: 'lazy', width: image.w, height: image.h });
  return el('figure', {}, img, el('figcaption', { textContent: caption }));
}

/* Copia texto y avisa en el propio botón */
async function copyText(text, btn, done = 'Copiado') {
  const old = btn.textContent;
  try { await navigator.clipboard.writeText(text); btn.textContent = done; }
  catch { btn.textContent = 'Error'; }
  setTimeout(() => (btn.textContent = old), 1500);
}

/* =========================================================
   3. GALERÍA Y FILTRO
   ========================================================= */
const grid = $('#grid');

PROJECTS.forEach(p => {
  const info = el('span', { className: 'info' },
    el('b', { textContent: p.title }),
    el('span', { textContent: p.tools.join(', ') }));
  const item = el('button', { className: `item ${p.size}`, type: 'button', ariaLabel: `Abrir ${p.title}` },
    el('img', { src: imgSrc(p.cover, p.title), alt: p.title, loading: 'lazy' }), info);
  item.dataset.cat = p.cat;
  item.addEventListener('click', () => openProject(p));
  grid.append(item);
});

function applyFilter(cat) {
  let n = 0;
  grid.querySelectorAll('.item').forEach(i => {
    const show = cat === 'all' || i.dataset.cat === cat;
    i.hidden = !show; if (show) n++;
  });
  $('#count').textContent = `${n} ${n === 1 ? 'proyecto' : 'proyectos'}`;
  document.querySelectorAll('#filters button').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.filter === cat)));
}
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('button[data-filter]');
  if (b) applyFilter(b.dataset.filter);
});
applyFilter('all');

/* =========================================================
   4. VISTA DE DETALLE (modal)
   ========================================================= */
const modal = $('#modal'), body = $('#modal-body');

function openProject(p) {
  $('#modal-title').textContent = p.title;
  $('#modal-meta').textContent = `${LABELS[p.cat]} · ${p.year}`;
  body.replaceChildren(...({ '3d': view3D, script: viewScript, ps: viewPS }[p.cat])(p));
  modal.showModal();
  modal.scrollTop = 0;
}

/* Etiquetas de software */
const toolTags = tools => el('div', { className: 'tools' }, ...tools.map(t => el('span', { className: 'tag', textContent: t })));

/* --- Modelo 3D: render final, wireframe, software --- */
function view3D(p) {
  const meta = el('dl', { className: 'meta' });
  Object.entries(p.info || {}).forEach(([k, v]) => meta.append(el('dt', { textContent: k }), el('dd', { textContent: v })));
  return [
    figure(p.render, 'Render final', `Render de ${p.title}`),
    figure(p.wire, 'Wireframe / malla', `Malla de ${p.title}`),
    el('div', { className: 'cols' }, el('p', { textContent: p.notes }), meta),
    downloadLinks(p.downloads),
    toolTags(p.tools)
  ];
}

/* Enlaces de descarga: solo se muestran si el proyecto tiene "downloads" */
function downloadLinks(list = []) {
  if (!list.length) return el('div');
  return el('div', { className: 'links' }, ...list.map(d =>
    el('a', { href: d.url, target: '_blank', rel: 'noopener',
              // El atributo "download" solo se aplica a archivos locales, no a páginas externas
              ...(/^https?:/.test(d.url) ? {} : { download: '' }),
              textContent: d.size ? `${d.label} (${d.size})` : d.label })));
}

/* --- Script: problema, código con copiar, enlace --- */
function viewScript(p) {
  const copy = el('button', { className: 'copy', type: 'button', textContent: 'Copiar' });
  copy.addEventListener('click', () => copyText(p.code, copy));
  const code = el('div', { className: 'code' }, copy, el('pre', {}, el('code', { textContent: p.code })));
  const links = el('div', { className: 'links' }, el('a', { href: p.github, target: '_blank', rel: 'noopener', textContent: 'Ver en GitHub' }));
  return [el('p', { textContent: p.problem }), code, links, toolTags(p.tools)];
}

/* --- Photoshop: comparativa antes/después y lista de capas --- */
function viewPS(p) {
  const slider = el('input', { type: 'range', min: 0, max: 100, value: 50, ariaLabel: 'Comparar antes y después' });
  const cmp = el('div', { className: 'compare' },
    el('img', { src: imgSrc(p.before, 'Antes'), alt: 'Antes' }),
    el('div', { className: 'after' }, el('img', { src: imgSrc(p.after, 'Después'), alt: 'Después' })),
    el('div', { className: 'line' }), slider);
  slider.addEventListener('input', () => cmp.style.setProperty('--pos', slider.value + '%'));
  const layers = el('ul', { className: 'layers' });
  (p.layers || []).forEach(([name, depth]) => { const li = el('li', { textContent: name }); li.style.setProperty('--d', depth); layers.append(li); });
  return [cmp, el('div', { className: 'cols' }, el('p', { textContent: p.notes }), layers), toolTags(p.tools)];
}

/* Cerrar: botón, tecla Esc (nativa) o clic fuera del contenido */
$('#modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

/* =========================================================
   5. TEMA CLARO / OSCURO
   ========================================================= */
$('#theme-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch {}
});

/* =========================================================
   6. COPIAR CORREO
   ========================================================= */
const emailBtn = $('#copy-email');
emailBtn.addEventListener('click', async () => {
  const status = $('#copy-status');
  try { await navigator.clipboard.writeText(emailBtn.dataset.email); status.textContent = 'Correo copiado'; }
  catch { status.textContent = 'No se pudo copiar'; }
  setTimeout(() => (status.textContent = ''), 1800);
});