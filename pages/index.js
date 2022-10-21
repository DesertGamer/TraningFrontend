import { useRouter } from 'next/router'
import FirstBlockImg from "/assets/svg/FirstBlockImg.svg"
import AppleLogo from "/assets/svg/AppleLogo.svg"
import GooglePlayLogo from "/assets/svg/GooglePlayLogo.svg"
import FeyaVverh from "/assets/svg/FeyaVverh.png"
import Next from "/assets/svg/Next.svg"
import Prev from "/assets/svg/Prev.svg"

import Header from "../components/Header";

export default function Home() {
    const router = useRouter()

    return (
        <div className={`bg-[#F6F6FE] fixed overflow-auto min-h-full min-w-full h-screen w-full bg-cover`}>
            <Header/>

            <div className={"w-full h-[500px] flex justify-center mt-[84px]"}>
                <div className={"flex bg-[#5D5FEF] w-[1271px] h-[498px] rounded-[30px]"}>
                    <div className={"flex flex-col justify-center items-center ml-[53px]"}>
                        <div className={"text-[70px] text-white font-bold tracking-[-0.02em] leading-[70px]"}>Earning rewards has never been so easy</div>
                        <div className={"flex mt-[35px]"}>
                            <div className={"flex justify-center items-center w-[273px] p-[10px] h-[75px] bg-black text-white rounded-[12px]"}>
                                <img width={"41px"} height={"50px"} src={AppleLogo}/>
                                <div className={"text-center ml-[10px]"}>Download on the<br/>app store</div>
                            </div>
                            <div className={"flex justify-center items-center w-[250px] h-[75px] bg-black text-white rounded-[12px] ml-[21px]"}>
                                <img width={"50px"} height={"50px"} src={GooglePlayLogo}/>
                                <div className={"text-center ml-[10px]"}>Download on the<br/>app store</div>
                            </div>
                        </div>
                    </div>
                    <img src={FirstBlockImg} width={"696px"} height={"360px"}/>
                </div>
            </div>

            <div className={"w-full mt-[77px] flex flex-col items-center"}>
                <div className={"font-[400] text-[#7879F1]  text-[30px]"}>How It Works</div>
                <div className={"text-[48px] font-[700] leading-[49px] w-[523px] text-center"}>What our customers say about us ?</div>

                <div className={"grid grid-cols-3 grid-rows-1 gap-[160px]"}>
                    <div className={"child:text-[24px] flex flex-col justify-center items-center"}>
                        <img height={'318px'} width={'318px'} src={FeyaVverh}/>
                        <div className={"w-[245px] font-bold"}>Track your <span className={"text-[#A5A6F6]"}>savings</span></div>
                        <div className={"w-[293px] text-center"}>Track your savings and build better spending habbits</div>
                    </div>
                    <div className={"child:text-[24px] flex flex-col justify-center items-center"}>
                        <img height={'318px'} width={'318px'} src={FeyaVverh}/>
                        <div className={'w-[307px] font-bold'}>Accomplish your <span className={"text-[#A5A6F6]"}>goals</span></div>
                        <div className={"w-[351px] text-center"}>Accomplish your savings goals </div>
                    </div>
                    <div className={"child:text-[24px] flex flex-col justify-center items-center"}>
                        <img height={'318px'} width={'318px'} src={FeyaVverh}/>
                        <div className={"w-[248px] font-bold"}>Redeem <span className={"text-[#A5A6F6]"}>rewards</span></div>
                        <div className={"w-[323px] text-center"}>Redeem rewards when you accomplish your savings goals. </div>
                    </div>
                </div>
            </div>

            <div className={"w-full mt-[100px] flex flex-col justify-center items-center"}>
                <div className={'text-[30px] text-[#7879F1]'}>WHAT THEY SAY </div>
                <div className={"text-[48px] font-[700] w-[523px] text-center leading-[49px]"}>What our customers say about us ?</div>
            </div>

            <div className={"w-full flex pt-[110px] pb-[33px] mt-[25px] bg-[#D8D8FF]"}>
                <div className={"flex flex-col w-full justify-center items-center"}>

                    <div className={"flex w-full justify-center items-center"}>
                        <div className={"text-[252px] text-[#5D5FEF] mr-[700px] mb-[90px] mb-[50px] absolute z-1"}>“</div>
                        <div className={"font-[700] text-[44px] text-[#2F2E41] leading-[50px] mt-[30px] z-20 w-[700px] h-[204px] text-center"}>It was hard to discipline myself in the past. The rewards deffinetly help me achieve my goals. </div>
                        <div className={"text-[252px] text-[#5D5FEF] mt-[300px] ml-[730px] absolute z-1 scale-y-[-1] rotate-180"}>“</div>
                    </div>

                    <div className={"mt-[50px] text-[30px] font-[700]"}>~ Marry from Canada</div>

                    <div className={"flex w-full child:text-[32px] child:text-center justify-evenly items-center"}>
                        <div className={"flex justify-center items-center"}>
                            <img className={"mr-[14px]"} src={Prev}/>
                            <div>Prev</div>
                        </div>
                        <div className={"flex justify-center items-center"}>
                            <div>Next</div>
                            <img className={"ml-[14px]"} src={Next}/>
                        </div>
                    </div>
                </div>

            </div>

            <div className={"w-full mt-[131px] flex justify-center items-center mb-[55px]"}>
                <div className={"w-[1272px] h-[237px] bg-[#A5A6F6] rounded-[12px] flex items-center"}>
                    <div className={"font-[700] text-[48px] w-[641px] ml-[52px] text-white"}>Join our mission to empower women to save</div>
                    <div className={"ml-[264px]"}>
                        <div className={"flex bg-black justify-start items-center mt-[23px] p-[10px] w-[273px] h-[75px] rounded-[12px] child:text-white"}>
                            <img src={AppleLogo}/>
                            <div className={"text-center ml-[10px]"}>Download on the<br/><span className={"font-bold"}>app store</span></div>
                        </div>
                        <div className={"flex bg-black justify-start items-center mt-[23px] p-[10px] w-[273px] h-[75px] rounded-[12px] child:text-white"}>
                            <img src={GooglePlayLogo}/>
                            <div className={"text-center ml-[10px]"}>Download on the<br/><span className={"font-bold"}>app store</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
