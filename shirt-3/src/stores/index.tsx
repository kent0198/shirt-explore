import { proxy } from "valtio";

const state=proxy({
    intro:true,
    color:'#EFBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'../assets/threejs.png',
    fullDecal:'../assets/threejs.png'
});
export default state