import { useRouter } from 'next/router'
import Logo from "/assets/svg/Logo.png"
import Coffee from '/assets/svg/Coffee.svg'
import Bell from '/assets/svg/Bell.svg'
import Creditcard from '/assets/svg/Creditcard.svg'
import SkinAvatar from '/assets/svg/Avatar.png'
import Polygon from '/assets/svg/Polygon.svg'
import Chart from '/assets/svg/Chart.svg'
import DiscordLK from '/assets/svg/Discord-LK.svg'
import VKLK from '/assets/svg/Vk-LK.svg'
import Header from "../components/Header";

export default function Home() {
    const router = useRouter()

    const test = new Array(336).fill(0)

    return (
        <div className={`bg-[#111414] fixed overflow-auto min-h-full min-w-full h-screen w-full bg-cover`}>
            <Header/>

            <div className="h-full w-full flex justify-center child:text-white">
                <div>
                    <div className="flex">
                        <img src={Chart} width="12" height="12"/>
                        <div className="ml-[5px]">Статистика: MrDefri</div>
                    </div>
                    <div className="w-[308px] h-[391px] bg-[#1C1C1C] mt-[10px]">

                    </div>
                    <div className="grid grid-cols-1 grid-rows-2 mt-[20px] gap-y-[15px]">
                        <div className="flex items-center card-socials bg-[#616EE0]">
                            <img className="ml-[20px] pr-[20px] border-[#707EFF] border-solid border-r-[1px]" src={DiscordLK}/>
                            <div className="pl-[16px]">Desert_Gamer#6666</div>
                        </div>
                        <div className="flex items-center card-socials bg-[#6194E0]">
                            <img className="ml-[20px] pr-[20px] border-[#81B3FF] border-solid border-r-[1px]" src={VKLK}/>
                            <div className="pl-[16px]">Нажми для добавления</div>
                        </div>
                    </div>
                </div>
                <div className="ml-[108px]">
                    <div>
                        <div className="text-[20px] font-[700]">Роли в дискорде:</div>
                        <div className="flex mt-[15px] child:mr-[10px] child:font-[700]">
                            <div>Игрок</div>
                            <div className="last:mr-0">Разработчик</div>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <div className="text-[20px] font-[700]">Статистика:</div>
                        <div className="flex mt-[15px] child:mr-[16px]">
                            <div>Наиграл: <span className="text-[#A584C8] font-[400]">5 ч.</span></div>
                            <div>Месяц: <span className="text-[#A584C8] font-[400]">5 ч.</span></div>
                            <div>Неделя: <span className="text-[#A584C8] font-[400]">5 ч.</span></div>
                            <div className="mr-0">Сегодня: <span className="text-[#A584C8] font-[400]">5 ч.</span></div>
                        </div>
                        <div className="grid grid-cols-[19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px] grid-rows-[19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px_19px] gap-y-[9px] gap-x-[9px] mt-[14px]">
                            {test.map(t => (
                                <div className="time-line"/>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[20px] flex items-center">
                        <div className="text-[20px] font-[700]">Предупреждения:</div>
                        <div className="bg-[#27272A] w-[23px] h-[23px] flex justify-center items-center ml-[5px] rounded-[5px] font-[700] text-[20px]">1</div>
                    </div>
                    <div className="w-[778px] h-[45px] border-[1px] border-[#9F61E0] rounded-[5px] flex items-center mt-[15px] mb-[20px]">
                        <div className="w-[273px] h-[45px] bg-[#9F61E0] rounded-l-[5px]"/>
                        <div className="w-full h-[45px] flex justify-center items-center">
                            <div className="ml-[30px] text-[14px] font-[300]">1/3 предупреждений!</div>
                        </div>
                    </div>
                    <div className="w-[819px] h-max border-[0.5px] border-t-[#343737] border-b-[#343737] border-r-0 border-l-0">
                        <div className='flex items-center mt-[25px]'>
                            <img className="rounded-[3px]" src={SkinAvatar} width='45px' height='45px'/>
                            <div className="flex flex-col justify-center ml-[10px]">
                                <div className="font-[400] text-[16px]">15:23 \ 22.07.22</div>
                                <div>Выдал: <span className="font-[700] text-[16px]">MrDefri</span></div>
                            </div>
                        </div>
                        <div className="mt-[18px] flex items-center mb-[25px]">
                            <img className="mr-[10px] text-[16px] font-[300]" src={Polygon}/>
                            <div>Разработка сайта без согласования с руководством</div>
                        </div>
                    </div>
                    <div className="w-[819px] h-[129px]">
                        <div className="flex items-center mt-[20px]">
                            <div className="text-[20px] font-[700]">Штрафы:</div>
                            <div className="bg-[#27272A] w-[23px] h-[23px] flex justify-center items-center ml-[5px] rounded-[5px] font-[700] text-[20px]">1</div>
                        </div>
                        <div className="w-[778px] h-[45px] border-[1px] border-[#EA3D2D] rounded-[5px] flex items-center mt-[15px] mb-[20px]">
                            <div className="w-[652px] h-[45px] bg-[#EA3D2D] rounded-l-[5px] flex items-center">
                                <div className="child:text-[10px] ml-[5px] child:font-[400]">
                                    <div>15:23</div>
                                    <div>22.07.22</div>
                                </div>
                                <div className="ml-[30px] child:text-[12px] child:font-[400]">
                                    <div>Штраф - 500 ₽</div>
                                    <div>Выдано сотрудником: New_Jeb</div>
                                </div>
                            </div>
                            <div className="w-full h-[45px] flex justify-center items-center">
                                <div className="ml-[30px] font-[300] text-[14px]">Обосрался на площади</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
