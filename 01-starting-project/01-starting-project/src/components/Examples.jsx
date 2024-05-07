import { useState } from "react";
import { EXAMPLES } from "../data";
import { CORE_CONCEPTS } from "../data";
import TabButton from "./TabButton";
import Tabs from "../Tabs";


export default function Examples(){
  const[sellectedTopic, setSellectedTopic ]=useState('')


  let tabContent= <p>Please select a Topic.</p>;

  if (sellectedTopic){
    tabContent = (
    <div id="tab-content">
    <h3>{EXAMPLES[sellectedTopic].title}</h3>
    <p>{EXAMPLES[sellectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[sellectedTopic].code}
      </code>
    </pre>
  </div>
  )}
  

  function handleSelect(sellectedButton){
    //sellectedButton = 'components', 'jsx', 'props', 'state' 
    setSellectedTopic(sellectedButton);
    console.log(sellectedTopic)
  }
  return(
    <section title="Examples" id="examples">
      <Tabs 
      buttons={
      <>
        {CORE_CONCEPTS.map((props) => <TabButton key={props.identifier} isSelected={sellectedTopic === props.identifier} onClick={() => handleSelect(props.identifier)}>{props.title}</TabButton>)}
      </>
      }>{tabContent}</Tabs>
    </section>
  );
}