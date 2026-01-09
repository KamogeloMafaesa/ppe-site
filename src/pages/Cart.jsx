import { useState } from 'react'
import { useCartStore } from '../store/useCartStore'

function Cart(){

    const items = useCartStore((s) => s.items)
    const removeItem = useCartStore((s) => s.removeItem)
    const updateQuantity = useCartStore((s) => s.updateQuantity)
    const clearCart = useCartStore((s) => s.clearCart)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const cartSummary = items.map((i) => `${i.name} x ${i.name} x ${i.quantity}`).join('\n')

return(
    <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Quote Cart</h2>

    {items.length === 0 ? (
        <p>Your cart is empty. Add items to request a quote.</p>
    ) :(
        <div className="space-y-4">
            {items.map((i) => (
                <div key={i.id} className="flex items-center justify-between border rounded p-3">
                    <div className="flex items-center gap-4">
                        <img src={i.image} alt={i.name} className="w-20 h-20 object-contain" />
                        <div>
                            <h3 className="font-semibold">{i.name}</h3>
                            <p className="text-sm text-gray-600">{i.description}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="number" min= "1" value={i.quantity} onChange={(e) => updateQuantity(i.id, Number(e.target.value))} className="w-20 border rounded p-1" />
                    </div>
                </div>
            ))}
            <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Customer Details</h4>

                {/*FormSumbit form will send all the fields to business email */}
                <form action="https://formsubmit.co/kamogelomafaesa7@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Quote Request from Mafaesa Trading Website" />
                <input type="hidden" name="_template" value="table" />

                 {/*send cart items as one hidden field separated by newline */}

                 <input type="hidden" name="items" value={cartSummary} />

                 <label className="block text-sm font-medium">Name</label>
                 <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded p-2 mb-2"/>
                
                 <label className="block text-sm font-medium">Email</label>
                 <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded p-2 mb-2"/>
                
                 <label className="block text-sm font-medium">Additional Message</label>
                 <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border rounded p-2 mb-4 " rows="3"/>
                  
                  {/*redirect to thank-you page */}

                  <input type="hidden" name="_next" value="http://localhost:5173/thank-you"/>
               
                  <div className="flex gap-6">
                    <button type="submit" className="!bg-yellow-500 text-white px-4 py-2 rounded hover:!bg-yellow-600 transition">Send Quote Request</button>
                    <button type="button" onClick={() => clearCart()} className="!bg-yellow-500 text-white px-4 py-2 rounded hover:!bg-yellow-600">Clear Cart</button>
                  </div>
                </form>
            </div>
        </div>
    )}
    </section>
)
}

export default Cart;