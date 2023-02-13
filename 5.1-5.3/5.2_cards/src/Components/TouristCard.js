import IMG from "./IMG"
import Text from "./Text"
const TouristCard = (props) => {
  return (
    <div className="container">
      <IMG className="picture" picLink={props.picLink} alternative={props.alternative}/>
      <Text className="content"
       title={props.title}
       description={props.description}
       href1={props.href1}
       href2={props.href2}
       href3={props.href3}
       linkContent1={props.linkContent1}
       linkContent2={props.linkContent2}
       linkContent3={props.linkContent3}
       />
      </div>
  )
}

export default TouristCard