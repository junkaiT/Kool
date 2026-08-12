/**
 * Renders a JSON-LD structured-data <script>. Accepts a single schema object
 * or an array of them. Server-rendered, so the markup is in the initial HTML
 * where crawlers read it.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Schema is built from trusted site data, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
