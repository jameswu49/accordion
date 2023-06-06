import image from './images/woman-mobile.svg'
import shadow from './images/shadow-mobile.svg'

export default function MobileImage() {
    return (
        <>
            <div className='h-1/4 flex justify-center items-center md:hidden'>
                <div>
                    <img className='relative top-[-1.5rem]' src={image} alt="" />
                    <img className='relative top-[-6rem]' src={shadow} alt="" />
                </div>
            </div>
        </>
    )
}