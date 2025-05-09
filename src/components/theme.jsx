import { useState } from "react"

function Theme({sendDataToParent}) {
    const [theme, setTheme]=useState("cute")

    const themeChange=(x)=>{
        console.log(x)
        setTheme(x)
        sendDataToParent(x)
    }

    return (
        <div>
            <div class='font-medium text-pink-600 text-lg'>Choose a theme</div>
            <div class='flex flex-col'>
                <div class='flex flex-row justify-between mt-4'>
                    <div tabindex="0" class='focus:border-2 focus:border-pink-600 rounded-md w-12/25 py-4 text-center content-center bg-gradient-to-br from-pink-200 via-blue-200 to-pink-200 text-white cursor-pointer' onClick={()=>themeChange("cute")}>Cute Love</div>
                    <div class='border-2 border-pink-200 rounded-md w-12/25 py-2 text-center content-center bg-gradient-to-br from-pink-200 via-blue-200 to-pink-200 text-white cursor-pointer focus:border-violet-500' onClick={()=>themeChange("pixel")}>Pixel Romance</div>
                </div>
                <div class='flex flex-row justify-between mt-4'>
                    <div class='border-l-2 border-r-2 border-pink-600 rounded-md w-12/25 py-4 text-center content-center bg-gradient-to-r from-orange-500 via-orange-300 via-yellow via-blue-400 to-blue-600 border-l-blue-500 border-r-orange-500 text-white cursor-pointer' onClick={()=>themeChange("pride")}>Pride Connect</div>
                    <div class='border-2 border-violet-600 rounded-md w-12/25 py-2 text-center content-center bg-gradient-to-br from-black via-violet-900 via-violet-800 via-violet-700 to-violet-500 text-white cursor-pointer' onClick={()=>themeChange("dark")}>Dark Desire</div>
                </div>
                <div class='flex flex-row justify-between my-4'>
                    <div class='border-2 border-gray-500 rounded-md w-12/25 py-4 text-center content-center bg-gray-200 cursor-pointer' onClick={()=>themeChange("minimal")}>Minimal Elegance</div>
                </div>
            </div>
        </div>
    )
}

export default Theme