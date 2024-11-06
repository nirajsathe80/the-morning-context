import { briefNews } from "@/app/data";

const NewsBrief = () => {
  return (
    <div className="bg-[#FFF9F1] px-4 py-6 min-h-[170px] overflow-scroll pb-4 scroll-bar-width">
      <div className=" gap-2 inline-flex">
        {briefNews.map((news, index) => {
          return (
            <div key={index} className="bg-white w-[320px] px-4 py-3 text-sm">
              <div className="flex gap-4 items-center pb-1 min-h-[30px]">
                {news.isBreaking && (
                  <div className="bg-red-800 text-white px-2 py-1 w-max font-semibold">
                    Breaking
                  </div>
                )}
                <p className="text-[#676C83]">{news.date}</p>
              </div>
              <p className="font-semibold text-[#292929]">{news.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsBrief;
