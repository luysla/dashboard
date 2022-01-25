import React, {
    useState,
    useEffect,
} from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

const ShowDate = () => {

    const [ date, setDate ] = useState(moment().format('ll'));
    const [ time, setTime ] = useState(moment().format('LT'));

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().format('ll'));
            setTime(moment().format('LT'));
        }, 1000)

        return () => clearInterval(interval);
    });

    return (
        <time>
            <p>{date}</p>
            <p>{time}</p>
        </time>
    )
}

export default ShowDate;