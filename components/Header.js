import Logo from "/assets/svg/Logo.svg"
import Coffee from '/assets/svg/Coffee.svg'
import Bell from '/assets/svg/Bell.svg'
import Creditcard from '/assets/svg/Creditcard.svg'
import SkinAvatar from '/assets/svg/Avatar.png'

export default function Header({ title, children }) {
    return (
        <div className="h-[65px] h-[80px] w-full flex justify-evenly child:text-white items-center">
            <div>
                <img src={Logo}/>
            </div>
            <div className="flex child:ml-[10px] child:text-[14px] child:font-bold child:cursor-pointer items-center">
                <div>Главная</div>
                <div className="dot-menu"/>
                <div>Статистика</div>
                <div className="dot-menu"/>
                <div>Вики</div>
                <div className="dot-menu"/>
                <div>Города</div>
                <div className="dot-menu"/>
                <div>Карта</div>
            </div>
            {/*<div onClick={() => { router.push("/login") }} className="bg-[#8C39E3] text-[14px] w-[162px] h-[33px] p-[10px] flex items-center rounded-[5px] cursor-pointer font-bold justify-center">*/}
            {/*    Авторизация*/}
            {/*</div>*/}
            <div className="text-[14px] w-[162px] h-[33px] p-[10px] flex items-center child:cursor-pointer justify-center child:mr-[15px]">
                <img src={Coffee}/>
                <img src={Bell}/>
                <img src={Creditcard}/>
                <img className="rounded-[3px]" src={SkinAvatar} width="45px" height="45px"/>
            </div>
        </div>
    )
}