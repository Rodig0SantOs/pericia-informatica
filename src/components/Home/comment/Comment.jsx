import listComments from "../../../utils/servicosComment";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Comment = () => {
  return (
    <section className="bg-block-primary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-12">
          O que nossos clientes dizem?
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {listComments.map((list, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 text-text-primary font-text"
            >
              <p className="text-lg italic relative pl-7 pr-7">
                <BiSolidQuoteAltLeft className="absolute left-0 top-0 text-green-700 text-2xl" />
                {list.description}
                <BiSolidQuoteAltRight className="inline ml-1 text-green-700 text-2xl align-text-bottom" />
              </p>
              <p className="mt-4 font-semibold italic">
                — {list.name}, Cliente desde {list.data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comment;
