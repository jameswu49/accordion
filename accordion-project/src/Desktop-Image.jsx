import image from "./images/woman-desktop.svg"
import shadow from "./images/shadow-desktop.svg"
import box from "./images/box-desktop.svg"

export default function DesktopImage() {
    return (
        <>
            <div className="w-1/2 overflow-hidden flex items-center justify-center relative">
                <div className="absolute left-[-5rem] z-10">
                    <img className="" src={image} alt="" />
                </div>
                <div className="absolute left-[-35rem] bottom-[-9rem]">
                    <img src={shadow} alt="" />
                </div>
            </div >
            <img className="absolute z-20 top-[30rem] left-[12rem]" src={box} alt="" />
        </>
    )
}