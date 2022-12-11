'use client';
import TimeAgo from 'react-timeago';

type Props = {
  time: String;
};

function LiveTimeStamp({time}:Props) {
  return (
    <TimeAgo date={time}>
      
    </TimeAgo>
  )
}

export default LiveTimeStamp
