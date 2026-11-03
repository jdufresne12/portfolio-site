export default function SectionHeading({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 id={`${id}-title`} className="section-title">
        {title}
      </h2>
      {intro && <p className="prose-measure mt-4 text-lg text-dim text-pretty">{intro}</p>}
    </div>
  );
}
