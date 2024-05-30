import React from 'react'
import Card from '../components/Card'
import Map from '../components/DataMapping'
import Data from '../Data.json'
import FormHandle from '../components/Form/FormHandle'
import ChildtoParent  from '../components/ChildtoParent'
export default function App() {

    console.log(Data);

//using empty arry and for loop
        // let data=[];
        // for(let i=0;i<Data.length;i++){
        //     data.push(<Map title={Data[i].title} des={Data[i].desc} />);
        // }
// using data map
        // let items=[];
        // items = Data.map((item)=> <Map title={Data[item].title} des={Data[item].desc} />);


  return (
    <div>
        {/* <Card title="Card 01" des="lorem ipsum"/>
        <Card title="Card 01" des="lorem ipsum"/>
        <Card title="Card 01" des="lorem ipsum"/> */}

        {/* <Map title={Data[0].title} des={Data[0].desc} />
        <Map title={Data[1].title} des={Data[1].desc} />
        <Map title={Data[2].title} des={Data[2].desc} />

        {data}

        {Data.map((item) => <Map title={item.title} des={item.desc} />)} */}

        {/* <FormHandle /> */}

        <ChildtoParent />

    </div>
  )
}
