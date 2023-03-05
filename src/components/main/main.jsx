import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../item/item";

const Main = ()=> {
    const [wargame, setWargame] = useState([]);
    const [collgame, setCollgame] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:1337/api/wargames?populate=*').then((wargame)=> {
            setWargame(wargame.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/collgames?populate=*').then((collgame)=> {
            setCollgame(collgame.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
    }, [])
    return (
        <>
            <Header/>
            <section>
                <article><h2>War game</h2></article>
                {wargame.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
                <article><h2>Collgame</h2></article>
                {collgame.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
            </section>
        </>
    )
}
export default Main