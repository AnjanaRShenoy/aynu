import { useState } from 'react';



function CreatePage() {
    const [name, setName] = useState("")

    const create = () => {
        console.log("jooo", name)
    }

    return (
        <div class='bg-gradient-to-br from-pink-200 via-blue-200 to-pink-200 h-screen w-screen'>
            <div>
                <header style={{ fontFamily: 'Playfair Display, serif' }} className=' flex justify-center text-center text-4xl md:text-5xl font-bold text-pink-600 mb-5 p-5'>Create Your Date Invitation</header>
                <div style={{ fontFamily: 'Playfair Display, serif' }} class='flex flex-col items-center' >
                    <label class='w-9/10 sm:w-1/3 text-left font-semibold text-pink-600'>Enter the name of your date:</label>
                    <input class='w-9/10 sm:w-1/3 border border-pink-600 h-10 rounded-md mt-2' value={name} onChange={(event) => setName(event.target.value)}></input>
                    <button class='w-9/10 sm:w-1/3 bg-green-400 text-white' onClick={() => create(name)}>Create Invitation</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePage
