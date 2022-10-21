import { useRouter } from 'next/router'
import Discord from "/assets/svg/Discord.svg"
import Vkontakte from "/assets/svg/Vkontakte.svg"
import Logo from "/assets/svg/Logo.svg"
import Wallet from '/assets/svg/Wallet.svg'
import Cart from '/assets/svg/Cart.svg'
import Star from '/assets/svg/Star.svg'
import Case from '/assets/svg/Case.svg'
import Gamepad from '/assets/svg/Gamepad.svg'
import Trash from '/assets/svg/Trash.svg'
import Image_Block2 from "/assets/svg/Image_Block2.svg"
import Header from "../components/Header";

export default function Home() {
    const router = useRouter()

    return (
        <div className={`bg-[#111414] fixed overflow-auto min-h-full min-w-full h-screen w-full bg-cover`}>
            <Header/>
            <div className="h-[597px] w-full bg-gradient-to-b from-[#DB00FF] to-[#A22CFF] flex justify-between items-center">
                <div className="ml-[290px] h-max w-max child:flex flex-col child:justify-center child:items-center">
                    <div className="text-white font-bold text-[32px] mb-[15px] ml-[15px]">Бесплатно. Удобно. Функционально.</div>
                    <div className="flex child:font-bold child:cursor-pointer child:ml-[25px] child:h-[39px] child:w-[154px] child:justify-center">
                        <div className="bg-[#FFFFFF] text-[#7401CE] p-[10px] flex items-center rounded-[5px] cursor-pointer">FAQ</div>
                        <div className="border-solid border-[1px] border-white p-[10px] flex items-center rounded-[5px] text-white">Авторизоваться</div>
                        <div className="bg-[#FFFFFF] text-[#7401CE] p-[10px] flex items-center rounded-[5px] cursor-pointer">Дискорд</div>
                    </div>
                </div>
                <img src={Image_Block2}/>
            </div>
        {/*    <div className="h-[672px] w-full child:text-white mt-[60px]">*/}
        {/*    <div className="header-question">Возможности</div>*/}
        {/*    <div className="mt-[45px]">*/}
        {/*        <div className="grid grid-cols-[336px_336px_336px] grid-row-[70px_70px_70px] gap-[75px] justify-center">*/}
        {/*            <div className="card">*/}
        {/*                <div className="w-full h-full child:flex flex-col justify-center items-stretch p-[25px]">*/}
        {/*                    <img className="mb-[15px] self-center" src={Wallet} width="45px" height="45px"/>*/}
        {/*                    <div className="flex-col self-center">*/}
        {/*                        <div className="text-[16px] font-bold">Удобные розыгрыши</div>*/}
        {/*                        <div className="text-[14px] font-light mt-[5px]">Наш продукт может помочь поднять активность на Вашем Twitch канале</div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="card">*/}
        {/*                <div className="w-full h-full child:flex flex-col justify-center items-stretch p-[25px]">*/}
        {/*                    <img className="mb-[15px] self-center" src={Cart} width="45px" height="45px"/>*/}
        {/*                    <div className="flex-col self-center">*/}
        {/*                        <div className="text-[16px] font-bold">Уровни, поинты</div>*/}
        {/*                        <div className="text-[14px] font-light mt-[5px]">На сервере используется <span className="text-[#9C4FED]">алмазы</span> в качестве основной валюты.</div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="card">*/}
        {/*                <div className="w-full h-full child:flex flex-col justify-center items-stretch p-[25px]">*/}
        {/*                    <img className="mb-[15px] self-center" src={Star} width="45px" height="45px"/>*/}
        {/*                    <div className="flex-col self-center">*/}
        {/*                        <div className="text-[16px] font-bold">Помощь модераторам</div>*/}
        {/*                        <div className="text-[14px] font-light mt-[5px]">Дружелюбный интерфейс и возможность указать доступы для управления в нашей панели управления</div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="card">*/}
        {/*                <div className="w-full h-full child:flex flex-col justify-center items-stretch p-[25px]">*/}
        {/*                    <img className="mb-[15px] self-center" src={Case} width="45px" height="45px"/>*/}
        {/*                    <div className="flex-col self-center">*/}
        {/*                        <div className="text-[16px] font-bold">Игровые активности</div>*/}
        {/*                        <div className="text-[14px] font-light mt-[5px]">Доступны уникальные активности для Вашего чата с помощью которых Вы можете проводить розыгрыши, интерактивы.</div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="card">*/}
        {/*                <div className="w-full h-full child:flex flex-col justify-center items-stretch p-[25px]">*/}
        {/*                    <img className="mb-[15px] self-center" src={Gamepad} width="45px" height="45px"/>*/}
        {/*                    <div className="flex-col self-center">*/}
        {/*                        <div className="text-[16px] font-bold">Интеграция в API игр</div>*/}
        {/*                        <div className="text-[14px] font-light mt-[5px]">Возможность по кастомной команде выводить статистику прямо с API игры обновляющую в реальном времени.</div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}

        {/*            <div className="card">*/}
        {/*                <div className="w-full h-full child:flex flex-col justify-center items-stretch p-[25px]">*/}
        {/*                    <img className="mb-[15px] self-center" src={Trash} width="35px" height="35px"/>*/}
        {/*                    <div className="flex-col self-center">*/}
        {/*                        <div className="text-[16px] font-bold">Скоро</div>*/}
        {/*                        <div className="text-[14px] font-light mt-[5px]"><span className="text-[#9C4FED]">Скоро</span></div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*</div>*/}
            <div className="h-[280px] w-full child:text-white border-t-[0.5px] border-white/[15%] border-solid flex justify-around items-end">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img src={Logo}/>
                    </div>
                    <div className="ml-[13px]">
                        <div className="text-[14px] font-bold">Corypting © Desert Cave Development</div>
                        <div className="text-[12px] font-light">Все права защищены. Продукт не относится к официальным продуктам Discord. </div>
                    </div>
                </div>
                <div className="flex items-center child:ml-[10px] child:cursor-pointer mr-[15px]">
                    <div className="">
                        <img src={Discord}/>
                    </div>
                    <div className="">
                        <img src={Vkontakte}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
