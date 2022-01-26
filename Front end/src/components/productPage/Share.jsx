import {ShareSocial} from 'react-share-social' 
import "./styles/imageGalery.css"
import "./styles/share.css"

// We can use inline-style
const style = {
  justifyContent: "center",
  background: '#ffffff',
  borderRadius: 3,
  border: 0,
  color: '#263238',
  padding: '0 30px',
  width: "20rem",
  height: "10rem",
  textAlign: "center",

};

export default function Share() { 
    return <ShareSocial 
    style={style}
    url ="localhost:3001/car"
    socialTypes={['facebook','twitter','instagram']} 
    />
}