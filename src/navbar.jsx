
const navbar = () => {
    return (
        <div className=" bg-white bg-opacity-20 justify-between flex drop-shadow-lg sticky">
            <div className="flex items-center text-3xl font-bold py-4 px-10"> IN <span className="text-[#F2BE09]">Tech</span></div>
            <div className="flex  items-center text-[#393939] font-light gap-5 py-4 px-16">
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">Products</div>
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">About</div>
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">Partners</div>
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">Pricing</div>
                <div className="mx-4 hover:border-[#F2BE09] hover:border-b">Support</div>
                <button className="px-4 font-normal text-[#F2BE09]">Login</button>
                <button className="px-4 bg-[#F2BE09] font-normal text-[#fff] rounded-lg py-1">Sign Up</button>
            </div>
        </div>

    )
}

export default navbar