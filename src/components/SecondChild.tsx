import { useEffect, useState } from "react";

interface IsecondChildProps {
  name: string,
  updateName: (arg: string) => void
  }
  const SecondChild: React.FC<IsecondChildProps> = ({name,updateName}) => {
  const [secondChildName, setSecondChildName] = useState<string>('')
  useEffect(() => {
    setSecondChildName(name)
    },[name])
    
  return (
  <section>
    <h1> {secondChildName} </h1>
    <button onClick={() => updateName('David')}>second child</button>
  </section>
  )
  }
  export default SecondChild;