

function Card (props){
    return(
<div className="card " >
  <img src={props.imgsrc} className="card-img-top" style={{width: "300px", height: "300px"}}alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.sname}</li>
    <li className="list-group-item">{props.sname1}</li>
    <li className="list-group-item">{props.sname2}</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">{props.link}</a>
  </div>
</div>
    );
}
export default Card;