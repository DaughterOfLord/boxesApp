
const Box = props => {
  //  Write your code here.
  const { box } = props
  return (
    { box }
  )
}

const element = (
  //  Write your code here. 
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="cards-container">
    <div className="box1">Small</div>
    <div className="box2">Medium</div>
    <div className="box3">large</div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
