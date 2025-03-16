
export const RenderUsers = (props) => {

    // const username = 'Amir'
    console.log(props.username)

    return <div>

        <h1 className="text-primary-color font-bold">{props.username}</h1>
    </div>
}