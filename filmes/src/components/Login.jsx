
// estado e função passados como props
export default function Login({isLogged, handleLogin}){
    

    return(
        <>
        <div className="flex gap-4 items-center">
            {/* && = if sem else */}
            {isLogged && <p>Olá, usuário</p>}
            <button className={`bg-${isLogged ? "purple-600" : "black"} text-white px-4 py-1 rounded`}
            onClick={handleLogin}>
                {/* if ternario */}
            {isLogged ? "Logout" : "Login"}
            </button>
        </div>
        
        </>
    )
}