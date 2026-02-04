import { useState } from "react";

import Profile from "./Profile";

import "./profile-list.css";

import type { Profile as ProfileModel } from "../models/profile";

import { DUMMY_USERS } from "../services/dummy-users";

function ProfileList({
  getProfile,
}: {
  getProfile: (profile: ProfileModel) => void;
}) {
  const profiles: ProfileModel[] = DUMMY_USERS;

  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

  return (
    <>
      <ul className="profile-list">
        {profiles.map((profile) => (
          <li key={profile.id}>
            <Profile
              profile={profile}
              getProfile={getProfile}
              isSelected={profile.id === selectedProfileId}
              setSelected={setSelectedProfileId}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProfileList;
