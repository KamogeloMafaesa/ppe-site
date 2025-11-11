import { useState } from "react"

function QuoteModal({product, isOpen, onClose}){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        quantity: 1,
    });

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Quote request submitted for ${product}`);
        setFormData({ name: "", email: "", quantity: 1});
        onClose();
    };

    if (!isOpen) return null;

    return(
        <div className="modal" onClick = {onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h3>Request a Quote</h3>

                <form
                action = "https://formsubmit.co/kamogelomafaesa7@gmail.com"
                method = "POST"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Quote Request from Website" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />

                    <label>Product</label>
                    <input type="text" value={product} readOnly />

                    <label>Full Name</label>
                    <input type="text"
                    name="name"
                    required
                   />

                    <label>Email</label>
                    <input type="email"
                    name="email"
                    required
                    />

                    <label>Quantity</label>
                    <input type="number"
                     name="quantity"
                     min="1"
                     required
                     />

                     <button type="submit">Submit Request</button>
                </form>
            </div>
        </div>
    );
}

export default QuoteModal;