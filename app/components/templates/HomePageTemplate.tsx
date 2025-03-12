import Card from '../molecules/Card'

interface CardData {
  containerStyle: string;
  bgImage: string;
  headingContainerStyle?: string;
  redirect?: string;
  headingData?: {
    className: string;
    title: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };
}

const homepageCardData: CardData[] = [
  {
    containerStyle: "order-2 md:order-none border-2 border-black min-h-32 xl:min-h-64",
    bgImage: "https://picsum.photos/400/300?random=2",
  },
  {
    containerStyle: "order-3 md:order-none border-2 border-black min-h-64",
    bgImage: "https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.webp",
    headingContainerStyle: "flex justify-center items-center text-center w-full h-full px-10",
    redirect: "/todo",
    headingData: {
      className: "text-8xl font-semibold text-blue-dark transition ease-in-out delay-150 hover:scale-110 duration-300",
      title: "Todo",
      level: 1
    }
  },
  {
    containerStyle: "order-1 md:order-none border-2 border-black min-h-64",
    bgImage: "https://image.tmdb.org/t/p/original/dbmKYY48PohU6DAx75Iq1hxUVm2.jpg",
    headingContainerStyle: "flex justify-center items-center text-center w-full h-full px-10",
    redirect: "/rick-and-morty",
    headingData: {
      className: "text-8xl font-semibold text-white transition ease-in-out delay-150 hover:scale-110 duration-300",
      title: "API",
      level: 1
    }
  },
  {
    containerStyle: "order-4 md:order-none border-2 border-black min-h-64",
    bgImage: "https://picsum.photos/400/300?random=1"
  }
]

const HomePageTemplate: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-2 md:gap-0 py-5 mx-5 md:mx-0 md:px-30 lg:px-[25%] xl:w-full 2xl:w-full">
      {
        homepageCardData.map((card, index) => (
          <Card key={`homepage-card-${index}`} cardData={card} />
        ))
      }
    </div>
  )
}

export default HomePageTemplate