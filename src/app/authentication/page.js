import Image from "next/image"
import assign from '../../../public/assign.png'

const Authentication=()=>{
    return(
        <>
        <div className="background">
            <Image
                src={assign}
                alt='assign2' priority
                fill
                placeholder="blur"
                quality={100}
                sizes="100vw"
                style={{
                    objectFit: 'contain',
                }}
                
            />
        </div>
       
        
        </>
    )
}
export default Authentication