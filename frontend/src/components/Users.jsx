import { useState } from "react"
import { Button } from "./Button"

export const Users = () => {

    const [users, setUsers] = useState([{
        firstName: "Harkirat", 
        lastName: "Singh", 
        _id: 1
    }])

    return <div>

        <div className="font -bold mt-6 text-lg">
            Users
        </div>
        
        <div className="my-2">
        <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>

        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>

    </div>
}

export function User({user}) {

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-ful">

        </div>
            {user.firstName} {user.lastName}
        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"}/>
        </div>

    </div>

}

// Doubts: Why are we not passin the User component in the Users component as a prop
// You're correct again. In this scenario, prop drilling or passing the User component as a prop in the Users component is not necessary. Here's why:

// Direct Component Usage: Similar to the Button component, the User component is directly imported into the Users component file at the top: import { User } from "./User". Therefore, it's available for use within the Users component without needing to pass it as a prop.

// Mapping Over Data: In the Users component, the users array is mapped over to render multiple User components, passing each user object as a prop to the User component: {users.map(user => <User user={user}/>)}. Here, the User component receives the user object as a prop, allowing it to render each user's information dynamically.

// Prop drilling or passing the User component as a prop in the Users component would only be necessary if the User component needed to receive data or functionality from a higher-level component in the component tree. But in this case, since it's directly imported and receives data through props, neither prop drilling nor passing it as a prop in the Users component is required.





// Doubt2: why are we not passing Button component as a prop in User component

// In React, prop drilling is the process of passing data from a component to its child components through props. However, in this case, there's no need for prop drilling because the Button component is being imported directly into the User component file.

// When you import a component directly into another component's file, you can use it within that component without passing it as a prop. The imported component becomes a direct child of the component it's being used in.

// So, in the User component, the Button component is directly accessible because it's imported at the top of the file. There's no need to pass it as a prop because it's already available for use within the User component.

// Prop drilling would be necessary if the Button component were several levels deep in the component tree and needed to receive data from a higher-level component. But in this case, since it's directly imported, prop drilling is not required.

