import { useEffect, useState } from "react";

import Profile from "./Profile";

import "./profile-list.css";

import type { Profile as ProfileModel } from "../models/profile";

import { fetchProfiles } from "../services/user.service";

function ProfileList({
  getProfile,
}: {
  getProfile: (profile: ProfileModel) => void;
}) {
  const [profiles, setProfiles] = useState<ProfileModel[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

  useEffect(() => {
    fetchProfiles(setProfiles);
  }, []);

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
