import Link from "next/link";
import Image from "next/image";
export default function Menu(){

    return(
      <header>  <Image
      width={100} 
      height={100}
      src={"https://www.ifms.edu.br/marcaifms.png"} />  <h2> Home </h2> <h2> Contact </h2> <h2> </h2></header>  
    );
}