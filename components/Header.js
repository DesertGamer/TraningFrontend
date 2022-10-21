export default function Header({ title, children }) {
    return (
        <header className="h-[65px] h-[80px] w-full flex justify-evenly items-center">
                <div className={"font-[700] text-[48px]"}>Re:<span className={"text-[#5D5FEF] font-bold"}>skale</span></div>

                <nav className={"flex child:text-[#5D5FEF] child:font-[700] child:text-[25px] child:mr-[16px]"}>
                    <ul>Home</ul>
                    <ul>How it works</ul>
                    <ul>Testimonials</ul>
                </nav>

                <div className={"text-white text-[18px] flex justify-center items-center rounded-[12px] p-[10px] bg-[#5D5FEF]"}>
                    Dowload
                </div>
        </header>
    )
}