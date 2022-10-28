import Bellavita from "../assets/Bellavita.png"
import Animoto from "../assets/Animoto.png"
import dermStore from "../assets/dermStore.png"
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa"
const ProjectData = [
    {
        imgsrc: Bellavita,
        title : "Bellavita Website Clone",
        description: "Bella Vita Organic's Affordable Natural Skincare Products Online to get the best Skin. Buy Fresh Skin Care Products from Bella Vita Organic at Affordable Prices. Multiple Payment Options",
        icon:[<FaHtml5 size={40} style={{color:"orange"}} /> , <FaCss3 size={40} style={{color:"blue"}} /> ,<FaJs size={40} style={{color:"yellow"}}  />] ,
        view: "",
        source:""
    },
    {
        imgsrc: Animoto,
        title : "Animoto Website Clone",
        description: "Create, edit, and share videos with our online video maker. Combine your photos, video clips, and music to make quality videos in minutes. Get started free!",
        icon:[<FaHtml5 size={40} style={{color:"orange"}} /> , <FaCss3 size={40} style={{color:"blue"}}/> ,<FaJs size={40} style={{color:"yellow"}} />] ,
        view: "",
        source:""
    },
    {
        imgsrc: dermStore,
        title : "DermStore Website Clone",
        description: "Dermstore. 366524 likes · 500 talking about this. Your virtual portal to the world of skin care from trusted brands, dermatologists and estheticians. Shop trusted skin care, makeup and beauty products, including SkinCeuticals, Obagi, Sunday Riley and Oribe. The Dermstore app makes it easy to shop for all your favorite skincare, hair care and beauty products from your mobile device.",
        icon:[ <FaReact size={40} style={{color:"#06bedf"}} /> ,<FaHtml5 size={40} style={{color:"orange"}} /> , <FaCss3 size={40} style={{color:"blue"}} /> ,<FaJs size={40} style={{color:"yellow"}}  />] ,
        view: "",
        source:""
    }
]
export default ProjectData ;