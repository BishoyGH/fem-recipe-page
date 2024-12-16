import omeletteImg from "./assets/images/image-omelette.jpeg";
import Attribution from "./components/Attribution";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import PreparationTime from "./components/PreparationTime";

export default function App() {
  return (
    <main className="bg-stone-100 text-stone-600 sm:p-8 md:p-16">
      <article className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-xl">
        <img src={omeletteImg} alt="Omelette" className="w-full object-cover" />
        <h1 className="my-6 text-4xl text-stone-900">Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <PreparationTime />
        <Ingredients />
        <hr className="border-stone-150" />
        <Instructions />
        <hr className="border-stone-150" />
        <Nutrition />
        <Attribution />
      </article>
    </main>
  );
}
