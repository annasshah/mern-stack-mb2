import {PricingCard} from './PricingCard'

export const PricingSection  = () => {


    return <div className='pricing'>
    <h1>
        This is Pricing Section component
    </h1>

    <div className='pricing-container'>
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
    </div>
</div>
}