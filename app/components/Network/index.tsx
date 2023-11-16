import Image from "next/image";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/network/canada flag.png",
        country: "British Columbia",
        paragraph: 'In the dynamic market of British Columbia, we provide cutting-edge financial solutions to help your enterprise thrive amidst the competitive tech and trade sectors.',

    },
    {
        imgSrc: "/assets/network/canada flag.png",
        country: "Ontario",
        paragraph: "From the bustling financial districts of Toronto to the growing industries of Ottawa, our firm delivers exceptional tax and accounting services to empower Ontario's diverse economy.",

    },
    {
        imgSrc: "/assets/network/canada flag.png",
        country: "Quebec",
        paragraph: "Embracing Quebec's unique business environment, we offer bilingual financial consultancy that aligns with the province's distinct tax regulations and cultural nuances.",

    },
    {
        imgSrc: "/assets/network/canada flag.png",
        country: "Alberta",
        paragraph: "With Alberta's ever-evolving energy and agriculture sectors, our financial services are designed to optimize your fiscal health and resource management.",

    },
]

const Network = () => {
    return (
        <div className="bg-babyblue" id="project">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">Empowering Financial Success <br />  Across Canada.</h3>

                <Image src={'/assets/network/canada.png'} alt={"map-image"} width={1400} height={800} />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 shadow-xl'>
                            <div className="flex justify-start items-center gap-2">
                                <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                                <h4 className="text-xl font-medium text-midnightblue">{item.country}</h4>
                            </div>
                            <hr />
                            <h4 className='text-lg font-normal text-bluegrey my-2'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Network;
