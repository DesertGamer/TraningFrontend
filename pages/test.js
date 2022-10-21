import {useRouter} from 'next/router'
import Wallet from '/assets/svg/Wallet.svg'
import Cart from '/assets/svg/Cart.svg'
import Star from '/assets/svg/Star.svg'
import Case from '/assets/svg/Case.svg'
import Gamepad from '/assets/svg/Gamepad.svg'
import Trash from '/assets/svg/Trash.svg'

export default function Home() {
    const router = useRouter()

    return (
        <div className={`bg-[#111414] fixed overflow-auto min-h-full min-w-full h-screen w-full bg-cover`}>
            {/*<div className="h-[24px] sm:h-[24px] md:h-[30px] w-full flex justify-evenly child:text-white items-center bg-white"></div>*/}
            <div className="text-white font-[30px] sm:font-[24px]">Example заголовок</div>
            <div className="mt-[45px]">
                <div className="grid grid-cols-[336px] md:grid-cols-[336px_336px_336px_336px] grid-row-[70px_70px_70px] gap-[75px] justify-center">
                    <div className="card"/>
                    <div className="card"/>
                    <div className="card"/>
                    <div className="card"/>
                    <div className="card"/>
                    <div className="card"/>
                    <div className="card"/>
                    <div className="card"/>
                </div>
            </div>
        </div>
    )
}
