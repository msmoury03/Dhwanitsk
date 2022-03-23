import React, { useEffect, useRef, useState } from 'react'

const Craddetail = () => {

    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null)
    const pin3Ref = useRef(null)
    const pin4Ref = useRef(null)

    const [pin1, setpin1] = useState("")
    const [pin2, setpin2] = useState("")
    const [pin3, setpin3] = useState("")
    const [pin4, setpin4] = useState("")


    useEffect(()=>{
        if(pin1.length == 4){
            pin2Ref.current.focus()
        }
        if(pin2.length == 4){
            pin3Ref.current.focus()
        }

        if(pin3.length == 4){
            pin4Ref.current.focus()
        }
    },[pin1.length,pin2.length,pin3.length,pin4.length])

    return (
        <div>

            <div>
                <input type='text' maxLength={4} ref={pin1Ref} onChange={(pin11) => {
                    setpin1(pin11.target.value);
                    
                }} />

                <input type='text' maxLength={4} ref={pin2Ref} onChange={(pin1) => {
                    setpin2(pin1.target.value);
                   
                }} />

                <input type='text' maxLength={4} ref={pin3Ref} onChange={(pin1) => {
                    setpin3(pin1.target.value);
                    
                }} />

                <input type='text' maxLength={4} ref={pin4Ref} onChange={(pin1) => {
                    setpin4(pin1.target.value);
                    
                }} />
            </div>

        </div>
    )
}

export default Craddetail