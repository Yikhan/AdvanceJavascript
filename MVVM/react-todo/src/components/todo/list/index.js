 import React, {Component} from 'react'

 class List extends Component {
   constructor (props) {
     super(props)
   }
   render () {
     const list = this.props.data // 传入一个列表
     return (
       <ul>
         {
           list.map((item, index) => {
             return <li key={index}>{item}</li>
           })
         }
       </ul>
     )
   }
 }

 export default List