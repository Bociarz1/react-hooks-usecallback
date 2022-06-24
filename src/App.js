import ShowResults from "./components/ShowResults";
import Button from "./components/Button";
import { useCallback, useState } from "react";

function App() {
  console.log("render App")
  const [money,setMoney] = useState(1000)
  const [points, setPoints] = useState(0)

  // 2. wrap functions with useCallback to prevent create new reference of the function after parent rerender
 const increaseMoney = useCallback(()=> {
  setMoney(money+100)
 },[money])

 const increasePoints = useCallback(()=> {
  setPoints(points+1)
 },[points])
  return (
    <>
      <ShowResults type="money" value={money}/>
      <Button type="money"increase={increaseMoney}/><br/>
      <ShowResults type="points" value={points}/>
      <Button type="points" increase={increasePoints}/>
    </>
  );
}

export default App;
