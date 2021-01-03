import * as React from 'react';
import { Button } from '../Button';

export const InputGroup = () => {
    const [value, setValue] = React.useState('');

    const [ show, setShow] = React.useState(false);
    
    const onClick = () => {
        setShow(!show);
    }

    return (
        <div className="Input-div">

        <div className="container">
            <div className="row justify-content-center">
                <input
                    value={value}
                    onChange = {e => setValue(e.target.value)}
                />
                <Button title="Send" onClick={onClick} />
            </div>
            <div className="row justify-content-center">
                   <p1> You have sent {show && value} ETH </p1>
            </div>
        </div>
        </div>
    )
}