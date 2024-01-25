"use client";

interface id{
    userId: number,
}

const ViewButtonUser : React.FC <id> = ({userId}) =>{

    const handleclick = () => {alert(`User ID : ${userId}`)}

    return(
        <>
            <button onClick={handleclick}>Lihat User ID</button>
        </>
    )
}

export default ViewButtonUser