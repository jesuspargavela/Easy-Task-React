import { useEffect, useState } from "react";

import Profile from "./Profile";

import "./profile-list.css";

import type { Profile as ProfileModel } from "../models/profile";

function ProfileList({
  getProfile,
}: {
  getProfile: (profile: ProfileModel) => void;
}) {
  const [profiles, setProfiles] = useState<ProfileModel[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfiles([...data.users]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfiles();
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
