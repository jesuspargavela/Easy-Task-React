import type { Profile } from "../models/profile";

export const fetchProfiles = async (setProfiles: React.Dispatch<React.SetStateAction<Profile[]>>) => {
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