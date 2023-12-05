import React, { useState } from 'react'
import CreditCardForm from '../Atoms/payments/CreditCardForm'
import SelectCardContainer from '../Molecules/SelectCardContainer'
import SelectCard from '../Atoms/SelectCard'
import MerchantForm from '../Atoms/payments/MerchantForm'

export default function PaymentMethodGroup() {
    const [selected, setSelected] = useState("Bank")

    return (
        <>
            <SelectCardContainer label="Payment Method" onSelected={setSelected}>
                <SelectCard name="BRI" desc="Bank Rakyat Indonesia" price="Bank" />
                <SelectCard name="BNI" desc="Bank Negara Indonesia" price="Bank" />
                <SelectCard name="BSI" desc="Bank Syariah Indonesia" price="Bank" />
                <SelectCard name="Indomaret" desc="PT Indomarco Prismatama" price="Merchant" />
            </SelectCardContainer>

            <div className='mt-12'>
                {selected == "Bank" ?
                    <CreditCardForm /> :
                    <MerchantForm />

                }
            </div>
        </>
    )
}
