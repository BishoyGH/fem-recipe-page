export default function PreparationTime() {
  return (
    <section className="my-4 rounded-xl bg-rose-50 p-6">
      <h2 className="mb-4 text-xl font-semibold text-rose-800">
        Preparation time
      </h2>
      <ul className="list-disc marker:text-rose-800 [&_strong]:text-stone-900">
        <li>
          <strong>Total</strong>: Approximately 10 minutes
        </li>
        <li>
          <strong>Preparation</strong>: 5 minutes
        </li>
        <li>
          <strong>Cooking</strong>: 5 minutes
        </li>
      </ul>
    </section>
  );
}
