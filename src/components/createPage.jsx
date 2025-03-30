import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Theme from './theme';



function CreatePage() {
    const [name, setName] = useState("")
    const navigate=useNavigate()

    const create = (e) => {
        e.preventDefault()
        localStorage.setItem("name", name)
        navigate('/proposal',{state:name})
    }

    const handleDataFromChild=(value)=>{
        // console.log(value)
    }

    return (
        <div class='bg-gradient-to-br from-pink-200 via-blue-200 to-pink-200 h-screen w-screen'>
            <div>
                <header style={{ fontFamily: 'Playfair Display, serif' }} className=' flex justify-center text-center text-4xl md:text-5xl font-bold text-pink-600 mb-5 p-5'>Create Your Date Invitation</header>
                <form onSubmit={create}>
                <div style={{ fontFamily: 'Playfair Display, serif' }} class='flex flex-col items-center ' >
                    <label class='w-9/10 sm:w-1/2 xl:w-1/3 text-left font-semibold text-pink-600' >Enter the name of your date:</label>
                    <input placeholder='e.g., Alex' class='text-pink-600 pl-3 w-9/10 sm:w-1/2 xl:w-1/3 border border-pink-600 h-10 rounded-md mt-2 focus:outline-none focus:outline-pink-600 focus:border-2 bg-gray-200' value={name} onChange={(event) => setName(event.target.value)} required></input>
                    <div class='w-9/10 sm:w-1/2 xl:w-1/3'><Theme sendDataToParent={handleDataFromChild}/></div>
                    <button class='w-9/10 sm:w-1/2 xl:w-1/3 bg-green-400 text-white hover:bg-green-500' type='submit' >Create Invitation</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePage
