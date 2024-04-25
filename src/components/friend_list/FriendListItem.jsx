import css from './FriendList.module.css'
import clsx from "clsx";

const FriendListItem = ({friends: {name, isOnline, avatar},}) =>{
    return(
     <div  className={css.friend_card}>
      <img className={css.friend_photo}
      src={avatar} alt="Avatar" width="48" />
      <p className={css.friend_name}>{name}</p>
      <p  className={clsx(css.friend_status, isOnline ? css.online : css.offline )}>{isOnline ? "Online" : "Offline"}</p>
    </div>
    );
    };

    export default FriendListItem;


  