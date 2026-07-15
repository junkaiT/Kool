export default function ArticlesPage() {
  return (
    <main>
      <section className="px-[18px] py-10 text-center">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <div className="text-[11px] font-bold text-teal uppercase tracking-[1.5px] mb-2.5">Articles</div>
          <h1 className="text-[26px] font-extrabold text-black mb-2.5">Aircon tips and guides</h1>
          <p className="text-sm text-grey leading-[1.7] mb-6">
            Helpful articles about aircon maintenance, energy saving, and getting the most from your aircon in
            Singapore.
          </p>
          <div className="bg-bg border border-dashed border-[#CCC] rounded-[10px] p-10 text-muted">
            Articles coming soon — check back shortly.
          </div>
        </div>
      </section>
    </main>
  );
}
