
import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}) {
  const [curOpen,setIsOpen]=useState(null)

  return <div>
    {data.map((el,i)=>
    (<AccordionItem title={el.title} key={i} num={i} curOpen={curOpen} onOpen={setIsOpen}>{el.text}</AccordionItem>))}

    <AccordionItem title="Fun with React"  key="22" num={22} curOpen={curOpen} onOpen={setIsOpen}>
    <ul>
      <li>This is a test</li>
      <li> To chec child props</li>
    </ul>
    </AccordionItem>

    

  </div>;

}

function AccordionItem({num,title,text, curOpen, onOpen,children}){

  let isOpen= num===curOpen

  function handleToggle(){
    onOpen(num)
    if(curOpen==num){
      onOpen(null)
    }
  }

  return(
    <div className={`item ${isOpen ? "open":""}`} onClick={handleToggle}>
      <p className="number">{num<9 ? `0${num+1}`:num+1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : '+'}</p>
      <p className="content-box">{isOpen && children}</p>
    </div>
  )
}
