import React, { useEffect, useState } from 'react'

const index = () => {
    const[input,setInput] = useState("")
    const[result,setResult] = useState("")
    const spaceRemover = () => {
        let tempArr = []
     for(let i=0; i<=input.length-1; i++){

        let newVar = input[i];

        //  console.log(input[i])
        if (newVar!==' '){
            tempArr.push(newVar)
        }
        else{
            tempArr.push("_")
        }
     }
     setResult(tempArr.join(""))
    }
    
    useEffect(() => {
     spaceRemover()
    },[input])
  return (
    <div>
        <input className='border-2 border-black' type='text' value={input}
        onChange={(e) => {setInput(e.target.value)}}
        />
        <div>
          {result.toUpperCase()}
        </div>
    </div>
  )
}

export default index


// import React, { useEffect, useState } from 'react'

// const index = () => {
//     const[input,setInput] = useState(" ")
//     const[result,setResult] = useState(" ")
//     const spaceRemover = () => {
//         let tempArry = []
//      for(let i =0; i<=input.length-1; i++){
//         console.log(input[i])
//         let newVar = input[i];

//         if (newVar!==" "){
//             tempArry.push(newVar)
//         }
//         else {
//             tempArry.push("_")
//         }
//      }
//        setResult(tempArry)
//     }

//     useEffect(() => {
//         spaceRemover()
//     },[input])
//   return (
//     <div>
//         <input className='border-2  border-black' type='text' value={input}
//         onChange={(e) => {setInput(e.target.value)}}
//         />
//         <div>
//             {result}
//         </div>
//     </div>
//   )
// }

// export default index;