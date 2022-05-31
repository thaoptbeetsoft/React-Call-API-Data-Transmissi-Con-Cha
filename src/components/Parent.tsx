import { useState } from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

const Parent: React.FC = () => {
    const [parentName, setParentName] = useState<string>('Mr John Obi');
    const updateName = (name: string): void => {
        setParentName(name)
    }
    return (
        <div>
            <FirstChild name={parentName} updateName={updateName} />
            <SecondChild name={parentName} updateName={updateName} />
        </div>
    )
}
export default Parent;