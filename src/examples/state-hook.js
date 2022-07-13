import React, { useState,useEffect } from 'react'
import ReactDOM  from 'react-dom'

// Class, stateless function component
// state, lifecycle

// 16.8 function component + hook => stateful function component



// export default class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count:0,
//        text:''
//     }
//   }
//   componentDidMount(){
//     console.log('ComponentDidMount Sayfa İlk Çalıştığında Bir Defa Çalışır')
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate State İçerisinde Bir Değer Değiştirildiğinde Çalışır.')
//   }
//   render() {
//     return (
//       <div>
//             <p>Buttona: {this.state.count} Defa Tıkladınız.</p>
//             <button onClick={()=>this.setState({count:this.state.count+1})}>Tıkla</button>
//       </div>
//     )
//   }
// }


// const App = () =>{
//   return(
//     <div>
//         function component
//     </div>
//   )
// // }

function App(props){
  const [count,setCount] = useState(props.count)
  const [text,setText] = useState(props.text)

  useEffect(()=>{
    console.log('Count ')
    localStorage.setItem('count',count) 
  },[count])

  useEffect(()=>{
    console.log('componentDidMount ')

    const countData = localStorage.getItem('count')

    if(countData) {
      setCount(Number(countData))
    }
  })

  useEffect(()=>{
    console.log('componentDidMount - componentDidUpdate')
  })


  return(
    <div>
      <p>Butona {count} Defa Tıladınız.</p>
      <p>Girilen Text: {text}</p>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setCount(count-1)}>-1</button>
      <button onClick={()=>setCount(props.count)}>reset</button>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  )
}

App.defaultProps = {
  count:5,
  text:'Lütfen Bir Yazı Gir'
}

ReactDOM.render(<App />,document.getElementById('root'))