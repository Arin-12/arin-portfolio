// Drop your photo at src/assets/profile.jpg (or .png / .webp) and it appears automatically.
const found = import.meta.glob("../assets/profile.{jpg,jpeg,png,webp}", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const src = Object.values(found)[0];

export default function Avatar() {
  return (
    <div className="mx-auto w-48 sm:w-60 lg:w-full lg:max-w-[280px]">
      <div className="rounded-3xl bg-gradient-to-br from-accent/60 via-line to-line p-[2px]">
        {src ? (
          <img src={src} alt="Portrait of Arin Jain" className="aspect-square w-full rounded-[22px] object-cover" />
        ) : (
          <div className="flex aspect-square w-full items-center justify-center rounded-[22px] bg-card font-display text-6xl font-extrabold text-accent" role="img" aria-label="Arin Jain initials">AJ</div>
        )}
      </div>
    </div>
  );
}
