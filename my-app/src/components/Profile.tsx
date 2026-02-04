import Card from "./shared/Card";

import "./profile.css";

import { type Profile as ProfileModel } from "../models/profile";

function Profile({
  profile,
  getProfile,
  isSelected,
  setSelected,
}: {
  profile: ProfileModel;
  getProfile: (profile: ProfileModel) => void;
  isSelected: boolean;
  setSelected: (id: string) => void;
}) {
  return (
    <Card isSelected={isSelected}>
      <article
        onClick={() => {
          setSelected(profile.id); 
          getProfile(profile);
        }}
        className={`profile-card`}
      >
        <img src={`users/${profile.avatar}`} alt={profile.name} />
        <p>{profile.name}</p>
      </article>
    </Card>
  );
}

export default Profile;
