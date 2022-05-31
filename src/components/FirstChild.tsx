import { useEffect, useState } from "react";

interface IfirstChildProps {
  name: string,
  updateName: (arg: string) => void
  }
  const FirstChild: React.FC<IfirstChildProps> = ({name,updateName}) => {
  const [firstChildName, setFirstChildName] = useState<string>('')
  useEffect(() => {
    setFirstChildName(name)
  },[name])
  
  return (
  <section>
    <h1> {firstChildName} </h1>
    <button onClick={() => updateName('Micheal')}>first child</button>
  </section>
  )
  }
  export default FirstChild;