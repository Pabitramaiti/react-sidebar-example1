import React from "react";
import { FcHome } from "react-icons/fc";
import { FcPicture } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { DiGoogleAnalytics } from 'react-icons/di';
import { LuLayoutDashboard } from 'react-icons/lu';

export const SidebarData = [
    {
        title: "Home",
        icon: <FcHome/>,
        link: "/home"
    },
    {
        title: "Mailbox",
        icon: <AiOutlineMail/>,
        link: "/mainbox"
    },
    {
        title: "Analytics",
        icon: <DiGoogleAnalytics/>,
        link: "/analytics"
    },
    {
        title: "Dashboard",
        icon: <LuLayoutDashboard/>,
        link: "/dashboard"
    },
    {
        title: "Friends",
        icon: <FcConferenceCall/>,
        link: "/friends"
    },
    {
        title: "Images",
        icon: <FcPicture/>,
        link: "/images"
    }
];