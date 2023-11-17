import Image from "next/image";
import Link from "next/link";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/svg/file_tax.svg",
        country: "Tax Filing",
        paragraph: 'Navigate the complexities of Canadian tax laws with ease. Our tax filing services ensure accuracy and maximize your returns.',

    },
    {
        imgSrc: "/assets/provide/svg/bookkeeping.svg",
        country: "Bookkeeping",
        paragraph: 'Keep your business financially organized and compliant. Our meticulous bookkeeping provides the insights you need for informed decision-making.',

    },
    {
        imgSrc: "/assets/provide/svg/accounts.svg",
        country: "Accounting",
        paragraph: 'From financial reporting to strategic planning, our accounting services cover all aspects to help your business thrive.',

    },
    {
        imgSrc: "/assets/provide/svg/business consulting.svg",
        country: "Business Consulting",
        paragraph: 'Expert advice to help your business grow. Our consulting services offer strategic insights tailored to your unique financial landscape.',
    },
]


const Provide = () => {
    return (
        <div id="services">

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">We Ensure Your Financial Health.</p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">At ABN CONSULTING, we bring clarity and simplicity to your financial matters. Our team of experts in Canada offers tailored solutions in tax filing, bookkeeping, and accounting to keep your finances in impeccable order. We&sbquo;re committed to guiding you through every financial decision with precision and care.</h4>
                            <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Discover Our Services <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                                    <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;
