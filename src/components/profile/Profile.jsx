import css from './Profile.module.css'


const Profile = ({username, tag, location, avatar="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" , stats: {followers, views, likes}}) => {
    return (
        <div className={css.card_box}>
           <div className={css.photo_box}>
            <img className={css.profile_photo}
              src={avatar}
              alt="User avatar"
             width="150"
        
            />
            <p className={css.user_name}>{username}</p>
            <p className={css.user_tag}>@{tag}</p>
            <p className={css.user_location}>{location}</p>
          </div>
        
  <ul  className={css.user_activites}>
            <li className={css.user_list_activites}>
              <span className={css.user_active}>Followers</span>
              <span className={css.user_active_number}>{followers}</span>
            </li>
            <li className={css.user_list_activites}>
              <span className={css.user_active} >Views</span>
              <span className={css.user_active_number} >{views}</span>
            </li>
            <li  className={css.user_list_activites}>
              <span className={css.user_active} >Likes</span>
              <span className={css.user_active_number} >{likes}</span>
            </li>
          </ul>
        </div>
    );
  };


  export default Profile;