import {useRouter} from 'next/router';
function Review() {
  const router=useRouter();
  const {productId,reviewId}=router.query;
  return (
    <h2>Reviews about product {productId} have id {reviewId}</h2>
  )
}

export default Review