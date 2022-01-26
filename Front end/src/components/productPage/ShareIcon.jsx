import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, EmailIcon, WhatsappIcon } from "react-share"; import "../productPage/styles/shareIcon.css"
import "./styles/shareIcon.css"

export default function ShareIcon(props) {
    const shareUrl = "localhost:3001/car"

    return (
        <div className="shareModal" data-testid="test-container-shareIcon">
           <div className="shareText">
           <i class="fas fa-bullhorn"></i>
            <p>{props.text}</p>
            </div>
            <div className="shareIcon">
                < FacebookShareButton size={36} round={true} url={shareUrl}>
                    <FacebookIcon size={36} round />
                </FacebookShareButton>
                < TwitterShareButton size={36} round={true} url={shareUrl} >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                < WhatsappShareButton size={36} round={true} url={shareUrl} >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                < EmailShareButton size={36} round={true} url={shareUrl} >
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>
        </div>
    )
}