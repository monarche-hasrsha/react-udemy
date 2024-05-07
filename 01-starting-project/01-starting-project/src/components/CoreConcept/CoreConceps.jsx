import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts(){
  return(
    <section id="core-concepts">
    <h2>Core Concept</h2>
    <ul>
      {CORE_CONCEPTS.map((props)=> <CoreConcept key={props.title} {...props} />)}
    </ul>
  </section>
);
}