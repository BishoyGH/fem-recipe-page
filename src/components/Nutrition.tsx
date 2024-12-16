export default function Nutrition() {
  return (
    <section className="my-6">
      <h2 className="my-6 font-YoungSerif text-3xl text-brown-800">
        Nutrition
      </h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="mt-4 w-full border-2 border-transparent [&_td]:px-4 [&_td]:py-2 [&_tr]:border [&_tr]:border-stone-150 hover:[&_tr]:bg-stone-150/15">
        <tbody>
          <tr>
            <td>Calories</td>
            <td className="font-bold text-brown-800">277kcal</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td className="font-bold text-brown-800">0g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td className="font-bold text-brown-800">20g</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td className="font-bold text-brown-800">22g</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
