import { useEffect } from "react";
import Router, { useRouter } from "next/router";

const Notfound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        },3000)
    }, [])
    return ( 
        <div>
            <h2>OOOOooooppss</h2>
            <p>The page you are looking could not been found,removed or we are working on it</p>
        </div>
    );
}
 
export default Notfound;