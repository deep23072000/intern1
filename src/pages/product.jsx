const Product =()=>{
    const obj = [{
        "id":1,
        "pname":"paper",
        "pprize":"99",
        "pbrand":"camlin",
        "pimage":"https://rukminim2.flixcart.com/image/850/1000/kbxzbm80/paper/v/c/d/printer-paper-1000-pcs-a4-printer-paper-officekart-original-imaft6h6jtgdpzxz.jpeg?q=20&crop=false"
    },
    {
        "id":2,
        "pname":"pen",
        "pprize":"49",
        "pbrand":"cello",
        "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKoCiJtMN_oQMp2QNCy-qsD3-wxTbbTG6nw&s"
    },
    {
        "id":3,
        "pname":"pen",
        "pprize":"49",
        "pbrand":"cello",
        "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKoCiJtMN_oQMp2QNCy-qsD3-wxTbbTG6nw&s"
    },
    {
        "id":4,
        "pname":"pen",
        "pprize":"49",
        "pbrand":"cello",
        "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKoCiJtMN_oQMp2QNCy-qsD3-wxTbbTG6nw&s"
    }
]

const style = {
    boxShadow:"0px 0px 10px 20px silver",
    width:"150px",
    borderRadius:"20px",
   

}
const style1 = {
     display:"grid",
    gridTemplateColumns:"auto auto auto",
    justifyContent:"space-evenly"
}
    return(
        <>
        <div style={style1}>
          {
            obj.map(pr=>(<div key={pr.id} style={style}>
                <img width={"150px"} src={pr.pimage} alt="" />
                <div>{pr.pname}</div>
                <div>{pr.pprize}</div>
                <div>{pr.pbrand}</div>
            </div>))
          }
          </div>
        </>
    )
}
export default Product