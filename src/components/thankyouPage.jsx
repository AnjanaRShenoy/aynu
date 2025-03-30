import { useLocation, useNavigate } from "react-router"

function Thankyou() {
    const location = useLocation()
    const name = location.state
    const navigate = useNavigate()
    const createNew = () => {
        navigate('/create')
    }
    const share = () => {
        if (navigator.share) {
            navigator.share({
                title: "Check this out!",
                text: "I found something interesting!",
                url: window.location.href,
            })
                .then(() => console.log("Shared successfully"))
                .catch((error) => console.log("Error sharing", error));
        } else {
            alert("Sharing not supported in this browser.");
        }
    }
    return (
        <div class='w-screen h-screen bg-gradient-to-br from-pink-200 via-blue-200 to-pink-200 flex flex-col items-center justify-center ' style={{ fontFamily: 'Playfair Display, serif' }}>
            <div class='text-pink-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center m-5'>Yay, {name}! Cant wait for our date! &#x1F495;</div>
            <div class='flex flex-row'>
                <div class='bg-blue-400 text-2xl font-extrabold text-white transition-transform duration-300 hover:scale-110 px-7 py-3' onClick={share}>Share the love!</div>
                <div class='bg-pink-400 text-2xl font-extrabold text-white transition-transform duration-300 hover:scale-110 px-7 py-3' onClick={createNew}>Create New Invitation</div>
            </div>
        </div>
    )
}
export default Thankyou