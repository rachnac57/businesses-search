import { StarHalf } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

export default function Ratings(props) {
    let ratingsList = [];
    const {ratings} = props;
    if (Number.isInteger(ratings)) {
        ratingsList = new Array(ratings).fill(1);
    } else {
        ratingsList = new Array(Math.floor(ratings)).fill(1);
        ratingsList.push(0.5);
    }
    return ratingsList.map((rating, index) => {
        if (rating === 1) {
            return <StarIcon key={`rating-${index}`} />;
        }
        return <StarHalf key={`rating-${index}`} />;
    });
}
