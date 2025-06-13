import { useState, useRef, useEffect } from "react";

const categorias = [
  { nombre: "Pantalones", ruta: "/pantalones" },
  { nombre: "Vestidos", ruta: "/vestidos" },
  { nombre: "Polos", ruta: "/polos" },
  { nombre: "Zapatillas", ruta: "/zapatillas" },
];

export const MenuDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        className="bg-amber-200 border border-amber-400 rounded px-4 py-2 font-semibold text-gray-700 hover:bg-amber-300 transition"
        onClick={() => setOpen((v) => !v)}
      >
        Menú ▼
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
          <ul>
            {categorias.map((cat) => (
              <li key={cat.nombre}>
                <a
                  href={cat.ruta}
                  className="block px-4 py-2 hover:bg-amber-100 text-gray-800"
                  onClick={() => setOpen(false)}
                >
                  {cat.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

