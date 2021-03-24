import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExploreIcon from '@material-ui/icons/Explore';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TheatersIcon from '@material-ui/icons/Theaters';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
function Sidebar1() {
    return (
        <div>
        <div className="sidebarsmall">
            <a className="icon margin-bottom"><HomeIcon /> Home </a>
            <a className="icon margin-bottom"><SubscriptionsIcon />Subscriptions</a>
            <a className="icon margin-bottom"><ExploreIcon /> Explore</a>
        </div>
        

        <div className="sidebarsmall">
            <a className="icon margin-bottom"><VideoLibraryIcon /> Library </a>
            <a className="icon margin-bottom"><HistoryIcon />History</a>
            <a className="icon margin-bottom"><WatchLaterIcon /> Watch Later</a>
            <a className="icon margin-bottom"><ThumbUpIcon /> Liked Videos</a>
        </div>
        

        <div className="sidebarsmall">
            <h3>Subscriptions</h3>
            <a className="icon margin-bottom"><LibraryMusicIcon /> Music </a>
            <a className="icon margin-bottom"><SportsSoccerIcon />Sports</a>
            <a className="icon margin-bottom"><SportsEsportsIcon /> Gaming</a>
            <a className="icon margin-bottom"><TheatersIcon /> Movies</a>
        </div>


        <div className="sidebarsmall">
            <a className="icon margin-bottom"><SettingsIcon /> Settings </a>
            <a className="icon margin-bottom"><FlagIcon />Report History</a>
            <a className="icon margin-bottom"><HelpIcon /> Help</a>
            <a className="icon margin-bottom"><FeedbackIcon />Feedback</a>
        </div>

        </div>
    )
}

export default Sidebar1

