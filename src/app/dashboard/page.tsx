import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutButton from "./logoutButton";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      Welcome: {session?.user?.name} <LogoutButton />
    </div>
  );
};

export default Dashboard;
