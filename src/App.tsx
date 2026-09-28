import { Torp } from "./components/Torp";
 
 
const torpNeve = "Törpapa"
 
const torpCsalad: { nev: string; kor: number }[] = [
  {nev: "Törpapa", kor: 2000},
   {nev: "Morgo", kor: 2200},
   {nev: "Törpilla", kor: 200},
   {nev: "Hapci", kor: 30}
]

const handleFunction=()=>{
  alert("...");
}
 
 
function App() {
 
 
  return (
    <>
      <h1>Törpök</h1>
      <Torp torpNeve={torpNeve} torpKora={2500}></Torp>
      {
        ...torpCsalad.map( (torp)=>(
          <Torp torpNeve={torp.nev} torpKora={torp.kor} muvelet={handleFunction}/>
        ))
      }
    </>
  )
}
 
export default App