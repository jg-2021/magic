import {useState} from 'react'

import Button from './Button'
const Input = () => {
    const [ques, setques] = useState([])
    const _onChange = (field,value) => {
        setques(value)
        
    }
    
    
    return (
        <div>
            <input name="ques" type="text" placeholder = "Enter Question" onChange={(e)=>{_onChange(e.target.name,e.target.value)}}/>
            <Button ques = {ques}/>
        </div>
    )
}

export default Input
