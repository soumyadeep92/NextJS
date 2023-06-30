export default function getUser({user})
{
    return(
        <>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </>
    )
}