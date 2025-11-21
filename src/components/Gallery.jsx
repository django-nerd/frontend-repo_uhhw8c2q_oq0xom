export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1400&q=60",
      alt: "Kyiv skyline at dusk",
      caption: "Kyiv skyline",
      credit: "Photo: Unsplash",
    },
    {
      src: "https://images.unsplash.com/photo-1691752644722-96834b51731b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLeWl2JTIwc2t5bGluZSUyMGF0JTIwZHVza3xlbnwwfDB8fHwxNzYzNzMwMDQ0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      alt: "Ukrainian flag waving in the sky",
      caption: "Ukrainian flag",
      credit: "Photo: Unsplash",
    },
    {
      src: "https://images.unsplash.com/photo-1649716368205-8ef066ec015d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVa3JhaW5pYW4lMjBmbGFnJTIwd2F2aW5nJTIwaW58ZW58MHwwfHx8MTc2MzczMDA0NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      alt: "Humanitarian aid supplies and volunteers",
      caption: "Humanitarian support",
      credit: "Photo: Unsplash",
    },
    {
      src: "https://images.unsplash.com/photo-1561673879-297ac83cafc7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIdW1hbml0YXJpYW4lMjBhaWQlMjBzdXBwbGllcyUyMGFuZHxlbnwwfDB8fHwxNzYzNzMwMDQ1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      alt: "Map and planning materials on a table",
      caption: "Maps and planning",
      credit: "Photo: Unsplash",
    },
  ]

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Photos</h2>
      <p className="text-blue-300/80 text-sm">Illustrative images to provide visual context (not real-time).</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <figure key={i} className="group overflow-hidden rounded-xl border border-blue-500/10 bg-slate-900/40">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <figcaption className="p-3 text-blue-100 flex items-center justify-between text-sm">
              <span>{img.caption}</span>
              <span className="text-xs text-blue-300/70">{img.credit}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="text-xs text-blue-300/70">Images are illustrative and sourced from royalty-free photography.</p>
    </section>
  )
}
