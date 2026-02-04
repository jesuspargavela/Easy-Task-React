import { useState } from "react";

import ProfileList from "./ProfileList";
import TaskContainer from "./TaskContainer";

import "./main.css";

import type { Profile } from "../models/profile";

function Main() {
  const [profile, setProfile] = useState<Profile | null>(null);

  const getProfile = (profile: Profile) => {
    setProfile(profile);
  };

  return (
    <main className="main-container">
      <ProfileList getProfile={getProfile} />
      {profile ? (
        <TaskContainer {...profile} />
      ) : (
        <h1 className="no-profile-selected">
          Select a user to see their tasks
        </h1>
      )}
    </main>
  );
}

export default Main;
