import { useLocation, useNavigate } from "react-router"
import { useState } from "react"

function ProposalPage() {
    const location = useLocation()
    const navigate=useNavigate()
    const name = location.state

    const [reject, setReject]=useState("No")
    const [counter, setCounter]=useState(0)
    const [padding, setPadding]=useState(1)
    const rejection=["Are you sure", "Please?", "Really?", "Think again!", "Last chance!", "Okay, fine...","\u{1F622}", "\u{1F494}", "\u{1F63F}", "No", "Are you sure?", "Please?", "Really?", "\u{1F622}", "\u{1F494}", "\u{1F63F}"]

    const handleRejection=()=>{
        setCounter(counter+1)
        setReject(rejection[counter])
        setPadding(counter+2)        
    } 
    const handleAcceptance=()=>{
        navigate('/thankyou',{state:name})
    }

    return (
        <div class='h-screen w-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-blue-200 to-pink-200 overflow-hidden' style={{ fontFamily: 'Playfair Display, serif' }}>
            <div>
                {name ?
                    <div class='text-pink-600 text-4xl font-semibold text-center'>Hi, {name}!</div>
                    :
                    null
                }
                <div class='text-pink-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center m-5'>Will you go on a date with me?</div>
                <div class='flex flex-row items-center justify-center m-10'>
                    <div class=' rounded-md bg-green-400 text-white font-semibold cursor-pointer' style={{ paddingLeft: `${35*padding}px`, paddingRight: `${35*padding}px`, paddingTop: `${15*padding}px`, paddingBottom: `${15*padding}px`, fontSize:`${18 + padding}px`}} onClick={handleAcceptance}>Yes &#x1F496;</div>
                    <div class=' rounded-md p-4 h-12 m-2 items-center justify-center bg-red-400 text-white font-semibold text-lg cursor-pointer' onClick={handleRejection}>{reject}</div>                    
                </div>
            </div>
        </div>
    )
}
export default ProposalPage