import Image from "next/image";

const newsLetterArray = [
  {
    title: "Government curbs export of COVID-19 Rapid Antigen Testing kits",
    description:
      "In a notification on Monday, the Directorate General of Foreign Trade (DGFT) said that the export of COVID-19...",
    sidebarColor: "!bg-[#F7A34B]",
  },
  {
    title: "New Zealand announced strict lockdown over one COVID-19 case",
    description:
      "On Tuesday, Prime Minister Jacinda Ardern announced a strict lockdown after confirming a new coronavirus case...",
    sidebarColor: "!bg-[#6C7AF6]",
  },
  {
    title: "China rejected WHO’s call for a new probe into COVID-19 origin",
    description:
      "China on Friday has rejected the World Health Organization’s (WHO) call for a new probe into the origi...",
    sidebarColor: "!bg-[#F7A34B]",
  },
  {
    title: "New Zealand announced strict lockdown over one COVID-19 case",
    description:
      "China on Friday has rejected the World Health Organization’s (WHO) call for a new probe into the origi...",
    sidebarColor: "!bg-[#F7A34B]",
  },
  {
    title: "Government curbs export of COVID-19 Rapid Antigen Testing kits",
    description:
      "In a notification on Monday, the Directorate General of Foreign Trade (DGFT) said that the export of COVID-19...",
    sidebarColor: "!bg-[#DE0046]",
  },
];

const NewsExplainer = () => {
  return (
    <div className="bg-[#FFF9F1] px-4 pt-10 pb-6">
      <div className="flex justify-between pb-4">
        <div className="flex gap-1">
          <Image src="vector.svg" alt="vector" width={10} height={22} />
          <span className="text-[#0D256C] text-xl uppercase "> Yesterday</span>
        </div>
        <span className="text-[#292929]  text-[16px] font-normal">
          APRIL 12, 2022
        </span>
      </div>
      <div className="block sm:flex sm:flex-wrap sm:gap-8">
        {newsLetterArray.map(({ description, title, sidebarColor }, index) => {
          return (
            <div
              className={`bg-[#F3F5FF] w-full flex gap-3 mb-6 max-w-[400px]`}
              key={index}
            >
              <span className={`w-3 h-auto bg-red-800 ${sidebarColor}`}></span>
              <div className="text-[#051462] p-4">
                <p className=" text-[18px] font-semibold pt-4">{title}</p>
                <p className="font-normal text-base py-4">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsExplainer;
