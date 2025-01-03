import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div className={`bg-primary text-white rounded ${props.className}`}>
<Link to={'/Products'}>{props.text}</Link >
 </div>

  )
}
