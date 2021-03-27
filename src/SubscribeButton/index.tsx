import { signIn, useSession } from 'next-auth/client'
import { api } from '../services/api';
import { getStripeJS } from '../services/stripe-js';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;

}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const [session] = useSession()
    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }

        // criar  o checkout useSession
        try {
            const response = await api.post('/subcribe')

            const { sessionId } = response.data;

            const stripe = await getStripeJS()

            stripe.redirectToCheckout({sessionId})
        } catch (err) {
            alert(err.message);
        }

    }

    return (
        <button
            type='button'
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe Now
        </button>
    )
}