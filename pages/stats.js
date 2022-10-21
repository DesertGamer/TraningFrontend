import { useRouter } from 'next/router'
import Logo from "/assets/svg/Logo.png"
import Coffee from '/assets/svg/Coffee.svg'
import Bell from '/assets/svg/Bell.svg'
import Creditcard from '/assets/svg/Creditcard.svg'
import SkinAvatar from '/assets/svg/Avatar.png'
import Header from "../components/Header";

export default function Home() {
    const router = useRouter()

    const test = new Array(20).fill(0)

    return (
        <div className={`bg-[#111414] fixed overflow-auto min-h-full min-w-full h-screen w-full bg-cover`}>
            <Header/>

            <div className="h-full w-full flex justify-center">
                <div className="h-[1550px] w-[1250px]">
                    <div className="h-[291px] w-full"></div>
                    <div className="mt-[36px] flex child:items-center child:text-[#FFFFFF] child:text-[16px] font-bold">
                        <div className="flex bg-[#1C1C1C] w-[176px] h-[53px] justify-center rounded-[15px] cursor-pointer">Все игроки</div>
                        <div className="flex bg-[#1C1C1C] w-[939px] h-[53px] ml-[130px] child:ml-[50px] rounded-[15px] child:cursor-pointer">
                            <div>Онлайн</div>
                            <div>Месяц</div>
                            <div>Неделя</div>
                            <div>Сегодня</div>
                        </div>
                    </div>
                    <input type="text" placeholder="Введи желаемый никнейм..." className="form-control block bg-inherit border-solid border-[1px] border-[#9F61E0] rounded-[7.5px] mt-[36px] w-full h-[44px] bg-cover text-white text-[16px] py-2 px-2"/>
                    <div className="mt-[36px]">
                        <div className="grid grid-cols-[270px_270px_270px_270px] grid-row-[100px_100px_100px_100px] gap-x-[50px] gap-y-[35px] ">
                            {test.map(t => (
                                <div className="card-stats">
                                    <div className="w-full h-full flex justify-start items-stretch p-[20px]">
                                        <img className="rounded-[5px]" src={SkinAvatar} width='60px' height='60px'/>
                                        <div className="flex-col self-center ml-[10px]">
                                            <div className="text-[16px] font-bold text-white">MrDefri</div>
                                            <div className="text-[14px] font-light mt-[5px] text-white">Наиграл: <span className="text-[#A584C8]">5 ч.</span></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
