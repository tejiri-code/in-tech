import React from 'react';
import Navbar from "./navbar";
import cartoon from "./images/cartoon.png";
import manage from "./images/manage.png";
import insight from "./images/insight.png";
import easy from "./images/easy.png";
import flexible from "./images/flexible.png";
import pgateway from "./images/pgateway.png";
import nopayment from "./images/nopayment.png";
import mike from "./images/mike.png";
import emily from "./images/emily.png";
import josh from "./images/josh.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gradup from "./images/gradup.png";
import blog1 from "./images/blog1.png";
import blog2 from "./images/blog2.png";
import blog3 from "./images/blog3.png";
import blog4 from "./images/blog4.png";
import blog5 from "./images/blog5.png";
import hml from "./images/hml.png";
import luqui from "./images/luqui.png";
import len from "./images/len.png";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



// import "./LandingPage.css";

export default function LandingPage() {
    const testimonials = [
        {
            quote: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            name: "Mike Fisher",
            location: "Dwain, Brazil",
            image: mike,
        },
        {
            quote: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            name: "Emily Brown",
            location: "Sipi, Australia",
            image: emily,
        },
        {
            quote: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            name: "Joseph Phil",
            location: "Graid, England",
            image: josh,
        },
    ];

    const blog = [
        {
            image: blog1,
            title: "Level of Business that we see now",
            date: "July 27, 2021",
        },
        {
            image: blog2,
            title: "The Amazing Difference a Year of Travelling.",
            date: "July 27, 2021",
        },
        {
            image: blog3,
            title: "Travel far enough, you meet yourself.",
            date: "July 27, 2021",
        },
        {
            image: blog4,
            title: "How to Save Money While Visiting Africa.",
            date: "July 27, 2021",
        },
        {
            image: blog5,
            title: "Reflections on 5 Months of Travel: Time to Hang",
            date: "July 27, 2021",
        }
    ]

    const contact = [
        {
            image: hml,
            details: "Nodal officers details:",
            name: "Ms. Savita Bhogra",
            email: "Email: helpdesk@mufinfinance.com",
            phone: "Phone: 0114-2610-0483",
            time: "Timings: 10 AM to 6 PM, Monday to Saturday"
        },
        {
            image: luqui,
            details: "Nodal officers details:",
            name: "Ms. Savita Bhogra",
            email: "Email: helpdesk@mufinfinance.com",
            phone: "Phone: 0114-2610-0483",
            time: "Timings: 10 AM to 6 PM, Monday to Saturday"
        },
        {
            image: len,
            details: "Nodal officers details:",
            name: "Ms. Savita Bhogra",
            email: "Email: helpdesk@mufinfinance.com",
            phone: "Phone: 0114-2610-0483",
            time: "Timings: 10 AM to 6 PM, Monday to Saturday"
        }
    ]

    const ContactCard = ({ image, details, name, email, phone, time }) => (
        <div className="flex  rounded-lg  p-5 gap-3 mx-auto">
            <img src={image} className="text-sm font-light my-auto text-[#666666] py-5  w-24 h-24" />
            <div className=" gap-10 ">
                <h1 className="text-[#393939] font-serif w-5/6 font-bold">
                    {details}
                </h1>
                <h1 alt="testimonial" className="text-[#393939] text-sm font-light " >{name}</h1>
                <h1 alt="testimonial" className="text-[#393939] text-sm font-light " >{email}</h1>
                <h1 alt="testimonial" className="text-[#393939] text-sm font-light " >{phone}</h1>
                <h1 alt="testimonial" className="text-[#393939] text-sm font-light " >{time}</h1>
            </div>
        </div>
    );

    const BlogCard = ({ image, title, date }) => (
        <div className="flex flex-col  rounded-lg  p-5 mx-auto">
            <img src={image} className="text-sm font-light text-[#666666] py-5 w-5/6" />
            <div className=" gap-10">
                <h1 className="text-[#373737] w-5/6 font-medium">
                    {title}
                </h1>
                <h1 alt="testimonial" className="text-[#999999] py-5" >{date}</h1>
            </div>
        </div>
    );

    const TestimonialCard = ({ quote, name, location, image }) => (
        <div className="flex flex-col border border-[#666666] border-opacity-10 rounded-lg bg-white p-10 mx-4">
            <h1 className="text-sm font-light text-[#666666] py-5">{quote}</h1>
            <div className="flex gap-10">
                <h1 className="text-[#222222] font-semibold">
                    {name} <p className="text-[#666666] font-light">{location}</p>
                </h1>
                <img src={image} alt="testimonial" className="w-1/6" />
            </div>
        </div>
    );

    // const CustomPrevArrow = (props) => {
    //     const { className, onClick } = props;
    //     return (
    //         <button className={`${className} custom-prev-arrow`} onClick={onClick}>
    //             &#10094;
    //         </button>
    //     );
    // };

    // const CustomNextArrow = (props) => {
    //     const { className, onClick } = props;
    //     return (
    //         <button className={`${className} custom-next-arrow`} onClick={onClick}>
    //             &#10095;
    //         </button>
    //     );
    // };

    const settings = {

        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const blogsettings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='overflow-x-hidden'>
            <Navbar />

            <div className="flex flex-col md:flex-row px-4 md:px-16 py-8 md:py-32 bg-[#fff] h-screen">
                <div className="md:w-1/2 md:pt-20">
                    <div className="text-4xl md:text-6xl font-normal text-[#393939] font-serif">
                        Secure, Seamless, <span className="text-[#F2BE09]">Smart<p className="pt-2">Finance</p></span>
                    </div>
                    <div className="text-lg md:text-xl pt-3 md:pt-5 font-light text-[#666666] font-sans">
                        Facilitating Seamless Transactions for an Enhanced and<br /> Fortified Financial Future
                    </div>
                    <div className="flex pt-3 md:pt-5">
                        <button className="px-4 bg-[#F2BE09] font-normal rounded-md text-[#fff] mr-3 md:mr-5 py-2">Apply Now</button>
                        <button className="px-4 text-[#666666] font-normal bg-[#fff] rounded-md border border-[#F2BE09] py-2">Download</button>
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <img src={cartoon} alt="cartoon" className="w-full h-auto" />
                </div>
            </div>


            <div className="bg-[#FFFEFA] pb-24">
                <h1 className="text-4xl text-[#393939] font-serif pt-20 font-semibold text-center">
                    Unlock access to<span className="text-[#F2BE09]"> limitless growth</span>
                </h1>
                <p className="text-center font-light text-[#666666] py-5">
                    We ensure that you’ll embark on a perfectly planned,<br /> safe vacation at a price you can afford.
                </p>
                <div className="flex flex-col md:flex-row gap-10 px-5 justify-center">
                    <div className="flex flex-col border border-[#666666] border-opacity-10 rounded-lg bg-white p-8 mx-2 mb-5 md:mb-0">
                        <img src={manage} alt="manage" className="w-fit" />
                        <h1 className="text-2xl font-semibold text-[#393939] py-5">Manage your money</h1>
                        <p className="text-[#666666] text-sm font-light">
                            Completes all the work associated<br /> with planning and processing
                        </p>
                    </div>
                    <div className="flex flex-col border border-[#666666] border-opacity-10 rounded-lg bg-white p-10 mx-2 mb-5 md:mb-0">
                        <img src={insight} alt="insight" className="w-fit" />
                        <h1 className="text-2xl font-semibold text-[#393939] py-5">Insights of business</h1>
                        <p className="text-[#666666] text-sm font-light">
                            After successful access then book <br />from exclusive deals & pricing
                        </p>
                    </div>
                    <div className="flex flex-col border border-[#666666] border-opacity-10 rounded-lg bg-white p-10 mx-2 mb-5 md:mb-0">
                        <img src={easy} alt="easy" className="w-fit" />
                        <h1 className="text-2xl font-semibold text-[#393939] py-5">Easy Integration</h1>
                        <p className="text-[#666666] text-sm font-light">
                            Start and explore a wide range of <br />exciting travel experience.
                        </p>
                    </div>
                    <div className="flex flex-col border border-[#666666] border-opacity-10 rounded-lg bg-white p-10 mx-2 mb-5 md:mb-0">
                        <img src={flexible} alt="flexible" className="w-fit" />
                        <h1 className="text-2xl font-semibold text-[#393939] py-5">Flexibility in payments</h1>
                        <p className="text-[#666666] text-sm font-light">
                            After successful access then book<br />from exclusive deals & pricing
                        </p>
                    </div>
                </div>
            </div>


            <div className=" py-20 md:py-32">
                <div className="flex justify-center">
                    <div className="flex flex-col px-5 md:px-0">
                        <h1 className="text-4xl text-[#F2BE09] font-serif font-semibold text-center">
                            Empowering Businesses<span className="text-[#393939]"> all over Nigeria</span>
                        </h1>
                        <p className="text-[#666666] font-light text-center py-5">
                            We ensure that you’ll embark on a perfectly planned,<br /> safe vacation at a price you can afford.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5 md:gap-10">
                            <div className="text-center">
                                <h1 className="text-4xl font-medium font-serif text-[#393939] pb-1 pt-5">2500+</h1>
                                <hr className="w-16 h-0.5 mx-auto bg-[#F2BE09]" />
                                <p className="text-[#666666] font-light pt-1">Loans Disbursed</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-medium font-serif text-[#393939] pb-1 pt-5">4000+</h1>
                                <hr className="w-16 h-0.5 mx-auto bg-[#F2BE09]" />
                                <p className="text-[#666666] font-light pt-1">Pincodes</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-medium font-serif text-[#393939] pb-1 pt-5">9000+</h1>
                                <hr className="w-16 h-0.5 mx-auto bg-[#F2BE09]" />
                                <p className="text-[#666666] font-light pt-1">Amount Disbursed</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-medium font-serif text-[#393939] pb-1 pt-5">1500+</h1>
                                <hr className="w-16 h-0.5 mx-auto bg-[#F2BE09]" />
                                <p className="text-[#666666] font-light pt-1">Cities & Towns</p>
                            </div>
                        </div>
                        <button className="px-4 bg-[#F2BE09] font-normal rounded-md text-[#fff] mt-6 md:mt-8 py-2 w-full md:w-auto">Apply Now</button>
                    </div>
                </div>
            </div>


            <div className="bg-[#FFFEFA] text-[#fff] py-10 md:py-20">
                <h1 className="text-4xl text-[#393939] font-serif font-semibold text-center md:pt-20">Customized solution for<span className="text-[#F2BE09]"> businesses</span></h1>
                <p className="text-center font-light text-[#666666] py-5">We ensure that you’ll embark on a perfectly planned,<br /> safe vacation at a price you can afford. </p>
                <div className="flex flex-col md:flex-row gap-10 px-5 md:px-10 justify-center">
                    <div className="flex flex-col rounded-lg p-10 text-center">
                        <img src={pgateway} alt="manage" className="w-fit" />
                        <h1 className="text-2xl font-serif font-semibold text-[#393939] pt-5 pb-2">Payment Gateway</h1>
                        <hr className="w-16 h-0.5 mx-auto bg-[#F2BE09]" />
                        <p className="text-[#666666] text-sm font-light pt-2">Completes all the work associated<br /> with planning and processing</p>
                    </div>
                    <div className="flex flex-col rounded-lg p-10 text-center">
                        <img src={nopayment} alt="manage" className="w-fit" />
                        <h1 className="text-2xl font-serif font-semibold text-[#393939] pt-5 pb-2">No code payments</h1>
                        <hr className="w-16 h-0.5 mx-auto bg-[#F2BE09]" />
                        <p className="text-[#666666] text-sm font-light pt-2">Completes all the work associated<br /> with planning and processing</p>
                    </div>
                </div>
            </div>


            <div className="pb-10 md:pb-24">
                <h1 className="text-4xl text-center text-[#F2BE09] font-serif font-semibold">
                    What people<span className="text-[#393939]"> say about us</span>
                </h1>
                <p className="text-center font-light text-[#666666] py-5">
                    We ensure that you’ll embark on a perfectly planned,<br /> safe vacation at a price you can afford.
                </p>
                <div className="flex justify-center py-10">
                    <Slider {...settings} className='w-full md:w-4/5'>
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </Slider>
                </div>
            </div>


            <div className='bg-[#FFFEFA] flex flex-col md:flex-row items-center justify-between py-16 md:py-32 px-6 md:px-24'>
                <div className='text-center md:text-left mb-10 md:mb-0'>
                    <h1 className='font-serif text-3xl md:text-5xl font-medium'>Trusted by over <span className='text-[#F2BE09]'>1 million</span> users</h1>
                </div>
                <div className='flex items-center justify-center md:flex-row'>
                    <img src={gradup} className='w-1/3 md:w-1/6' alt="Gradup Logo" />
                                    <div className='ml-4 md:ml-8 lg:ml-12 font-serif'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>Powered by</h1>
                    <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>Grad<span className='text-[#1C4980]'>Up</span></p>
                    </div>
                </div>
            </div>


            <div className=''>
                <h1 className="text-4xl md:text-5xl text-center text-[#393939] font-serif pt-20 font-semibold">Recent<span className="text-[#F2BE09]"> Blogs</span></h1>
                <p className="text-center font-light text-[#666666] py-5">We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
                <div className="flex justify-center py-10 px-6 md:px-16">
                    <Slider {...blogsettings} className='w-full'>
                        {blog.map((blog, index) => (
                            <BlogCard key={index} {...blog} />
                        ))}
                    </Slider>
                </div>
            </div>


            <div className='py-10 bg-[#FFFEFA]'>
                <h1 className='text-[#F2BE09] text-center font-bold text-4xl font-serif'>Begin a business journey <span className='text-[#393939]'>that<br /> transitions to new heights every day!</span></h1>
                <div className='mx-auto justify-center items-center flex py-10'>
                    <button className="px-4 bg-[#F2BE09] font-normal rounded-md text-[#fff] mr-5 py-2 ">Getting started</button>
                    <button className="px-4 text-[#666666] font-normal bg-[#fff] rounded-md border border-[#F2BE09] py-2">Contact us</button>
                </div>
            </div>

            <div className='py-10 bg-[#FFFEFA]'>
                <div className="flex flex-col md:flex-row justify-center mx-auto px-5 md:px-16">
                    {contact.map((card, index) => (
                        <ContactCard key={index} {...card} />
                    ))}
                </div>
            </div>


            <footer id="contacts" className="bg-[#393939] text-white ">
                <div className="container mx-auto px-6 py-10 md:py-24 md:flex md:flex-row md:justify-between">
                    <div className='grid grid-cols-3 md:grid-cols-5 gap-10 md:gap-20'>
                        <div className=" ">
                            <h1 className="text-xl font-light font-serif mb-4">Accept Payments</h1>
                            <ul className="text-sm">
                                <li className="py-1 font-light  opacity-60">Payment Gateways</li>
                                <li className="py-1 font-light  opacity-60">Subscription</li>
                                <li className="py-1 font-light  opacity-60">Native OTP</li>
                                <li className="py-1 font-light  opacity-60">International Payments</li>

                            </ul>
                        </div>
                        <div className="">
                            <h1 className="text-xl font-light font-serif mb-4">Other Products</h1>
                            <ul className="text-sm">
                                <li className="py-1 font-light  opacity-60">FinTech Connect</li>
                                <li className="py-1 font-light  opacity-60">QR</li>
                                <li className="py-1 font-light  opacity-60">POS</li>
                                <li className="py-1 font-light  opacity-60">Transact</li>
                                <li className="py-1 font-light  opacity-60">Accounting Automation</li>
                                <li className="py-1 font-light  opacity-60">Cross-Border Payments</li>


                            </ul>
                        </div>

                        <div className="">
                            <h1 className="text-xl font-light font-serif mb-4">Company</h1>
                            <ul className="text-sm">
                                <li className="py-1 font-light  opacity-60">About Us</li>
                                <li className="py-1 font-light  opacity-60">Careers</li>
                                <li className="py-1 font-light  opacity-60">Partners</li>
                                <li className="py-1 font-light  opacity-60">FinTech Policies</li>
                                <li className="py-1 font-light  opacity-60">Terms & Conditions</li>
                                <li className="py-1 font-light  opacity-60">Banned & Restricted lists</li>
                                <li className="py-1 font-light  opacity-60">Annual Returns</li>


                            </ul>
                        </div>


                        <div className="">
                            <h1 className="text-xl font-light font-serif ">Manage Payments</h1>
                            <ul className="text-sm">
                                <li className="py-1 font-light  opacity-60">Mobile App SDKs</li>
                                <li className="py-1 font-light  opacity-60">Priority Settlements</li>
                                <li className="py-1 font-light  opacity-60">Instant Refunds</li>
                                <li className="py-1 font-light  opacity-60">Payouts</li>
                                <li className="py-1 font-light  opacity-60">Split Settlements</li>
                                <li className="py-1 font-light  opacity-60">Token Hubs</li>

                            </ul>
                        </div>
                        <div className="">
                            <h1 className="text-xl font-light font-serif ">Resources</h1>
                            <ul className="text-sm">
                                <li className="py-1 font-light  opacity-60">FinTech for Developers</li>
                                <li className="py-1 font-light  opacity-60">API References</li>
                                <li className="py-1 font-light  opacity-60">API Playground</li>
                                <li className="py-1 font-light  opacity-60">Blog</li>

                            </ul>
                        </div>
                        <div className=" ">
                            <h1 className="text-xl font-light font-serif ">Help & Support</h1>
                            <ul className="text-sm">
                                <li className="py-1 font-light  opacity-60">FAQs</li>
                                <li className="py-1 font-light opacity-60">Contact Us</li>
                                <li className="py-1 font-light  opacity-60">Digisaathi</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/4 md:mr-8">
                        <div className="text-2xl  flex pb-5 font-semibold">
                            <h1 className="font-extrabold">In Tech</h1>{" "}
                        </div>
                        <p className="text-sm  mb-6 opacity-60">
                            PayU is the leading payments solution provider to 5 lakh+ businesses in India. PayU enables businesses to collect online & offline payments across 150+ payment modes such as Credit Cards, Debit Cards, Net Banking, EMIs, BNPL, QR, UPI, Wallets and more. PayU payment gateway offers the highest success rates and ensures a seamless and secure checkout experience.        </p>

                    </div>

                </div>
                <hr className=' bg-white   w-5/6 justify-center m-auto  '></hr>
                <div className='block lg:flex justify-between text-center mx-auto sm:mx-32 py-5'>
                    <h1 className=' font-light text-center'>Copyright, In Tech 2022. All rights reserved.</h1>
                    <p className='flex items-center justify-center py-5 lg:py-0 gap-4'>
                        <FaFacebook className='w-10 h-8' />
                        <FaSquareInstagram className='w-10 h-8' />
                        <FaLinkedin className='w-10 h-8' />
                        <FaTwitterSquare className='w-10 h-8' />
                        <FaYoutube className='w-10 h-8' />
                    </p>
                </div>


            </footer>

        </div>
    );
}
