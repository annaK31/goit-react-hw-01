import FriendListItem from './FriendListItem'
import css from './FriendList.module.css'

const FriendList = ({friends}) => {
return (
    <ul className={css.friends_box}>
		{friends.map((friend) =>(
			<li  className={css.friends_item}  key={friend.id}>
		<FriendListItem friends={friend} />
	</li>
		))
		}
</ul>
);
};

export default FriendList;