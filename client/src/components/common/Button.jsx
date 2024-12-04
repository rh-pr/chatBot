
function Button({title, btnFunction}) {
  
  return (
    <button className="btn" onClick={() => btnFunction()}>{title}</button>
  )
}

export default Button
