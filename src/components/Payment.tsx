import * as React from "react";
import { useEffectDebugger } from "../utils/useEffectDebugger";

export const Payment: React.FC = () => {
    const nameOnCardRef = React.useRef(null);
    const cardNumberRef = React.useRef(null);
    const expiryRef = React.useRef(null);
    // const [input, setInput] = React.useState("");

    // const handleClick = () => {
    //     console.log(input);
    // }

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     setInput(e.target.value);
    // }

    useEffectDebugger(() => {
        console.log("useEffect()...");
        /*
        Create an instance of the secure fields. Pass the public key as the first argument. 
        As the second argument, we'll pass a list of custom fonts to be applied to the fields (this is optional).
        */
        const fonts = [
            { src: 'https://fonts.googleapis.com/css?family=Source+Code+Pro' }
        ];

        const formElements = new (window as any).POS.Fields("99346d84-5187-4221-9c16-dc51a8de27fa", { fonts });
        console.log(formElements);
    
        /*
        Create an object holding additional options that you can pass to the constructor for instantiating 
        the credit card and card expiry fields.
        There are lots of other options available that you can pass to the constructor, 
        but to keep it simple we'll just show this one object in our example. 
        */
        const placeholders = {
            cardNumber: '1234 1234 1234 1234',
            expDate: 'MM / YY'
        };
    
        // if (!formElements.elements.cardNumber) {
        //     console.log("cardNumber", formElements.elements);
        //     // Instantiate the fields you want to show and mount them to the DOM.
        //     const cardNumber = formElements.create('cardNumber', {
        //         placeholders
        //     });
        //     cardNumber.mount('#card-number');
        //     cardNumber.on("change", (e: any) => console.log("change", e));
        //     cardNumber.on("focus", (e: any) => console.log("focus", e));
        //     cardNumber.on("blur", (e: any) => console.log("blur", e));
        // }

        // if (!formElements.elements.creditCardExpiry) {
        //     console.log("creditCardExpiry", formElements.elements);
        //     const expiry = formElements.create('creditCardExpiry', {
        //         placeholders
        //     });
        //     expiry.mount('#exp-date');
        // }

        // Instantiate the fields you want to show and mount them to the DOM.
        const cardNumber = formElements.create('cardNumber', {
            placeholders
        });
        cardNumber.mount('#card-number');

        const expiry = formElements.create('creditCardExpiry', {
            placeholders
        });
        expiry.mount('#exp-date');
            
        // /*
        // Create a token when the user submits the form, but not until we fetched the card holder's name 
        // so that we can pass it in an additional data object to the createToken call.
        // */
        // document.getElementById('payment-form').addEventListener('submit', async(event) => {
        //     event.preventDefault()
        //     const additionalData = {
        //         holder_name: document.getElementById('cardholder-name').value // This field is mandatory
        //     }
        //     const result = await (window as any).POS.createToken(cardNumber, {
        //         additionalData,
        //         environment: 'test' // Set the PaymentsOS environment you're connecting to
        //     })
        //     console.log(`The response is ${JSON.stringify(result)}`)
        // });

    }, []);

    
    const processPayment = () => {
        //console.log("processPayment");
        console.log(nameOnCardRef);
        console.log(cardNumberRef);
        console.log(expiryRef);
        // const additionalData = {
        //     holder_name: document.getElementById('cardholder-name').value // This field is mandatory
        // }
        // const result = await (window as any).POS.createToken(cardNumber, {
        //     additionalData,
        //     environment: 'test' // Set the PaymentsOS environment you're connecting to
        // })
        // console.log(`The response is ${JSON.stringify(result)}`)
    }
    

    return(
        <header className="App-header">
            <h1>Payment</h1>
            {/* <input type="text" onChange={handleInputChange} />
            <button onClick={handleClick}>Click Me</button> */}

            <div id="payment-form">
                <div className="field">
                    <label>Name</label>
                    <input id="cardholder-name" type="text" ref={nameOnCardRef} className="input empty" placeholder="John Doe" />
                </div>
                <div className="field">
                    <label>Card Number</label>
                    <input id="card-number" type="text" ref={cardNumberRef} className="input empty" />
                </div>
                <div className="field">
                    <label>Expiration Date</label>
                    <input id="exp-date" type="text" ref={expiryRef} className="input empty" /> 
                </div>
                <button onClick={processPayment}>Pay</button>
            </div>
        </header>
    );
}