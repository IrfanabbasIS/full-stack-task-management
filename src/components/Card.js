import React from 'react'

export default function Card(props) {

    let options=props.options;
    let priceOptions=Object.keys(options);
  return (
    <div>
    <div className="card m-2 " style={{"width": "18rem;", "maxHeight":"", "maxWidth":"360px" , "borderRadius":"20px"}}>
        <img className="card-img-top" style={{ "objectFit":"fill" ,  "maxHeight":"200px", "height":"50%" , borderTopRightRadius:"20px", borderTopLeftRadius:"20px"}}
         src={props.imgSrc} alt="Card  cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
           
            
            <div className='container w-100'>
                <select className='m-2 h-100  bg-success rounded'>
                {Array.from(Array(6),(e,i)=>{
                    return (
                        <option key={i+1} value={i+1}> &nbsp;&nbsp;&nbsp;{i+1}</option>
                    )
                })}
                </select>

                <select className='m-2 h-100  bg-success rounded'>
                    {priceOptions.map((data)=>{
                        return <option key={data} value={data}>{data}</option>
                    })}
                </select>

                <div className='d-inline fw-bold'>
                    Total Price
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
