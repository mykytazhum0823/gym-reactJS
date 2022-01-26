import { DashboardIcon, ManageGymIcon, ManageUserIcon, ManageMembershipIcon, ReportingIcon } from "./icons/AdminIcons";
import { EnrollIcon, ScanQRIcon } from "./icons/CutomerIcons";
import { ManageClassIcon, ManageTrainerIcon } from "./icons/GymIcons";
import { EditProfileIcon, PayIcon } from "./icons/TrainerIcons";

const SidebarInfo ={
    admin:{
        userAvatar:'AD',
        userName:'Adrian Demian',
        userRole:'ADMIN',
        dropdownMenu : [
            {name: 'Dashboard', to:'/console/admin'},
            {name:'logout', to:'/logout'}
        ],
        menu:[
            {icon: <DashboardIcon/>, name:'Dashboard', to:'/console/admin'},
            {icon:<ManageGymIcon/>, name:'Manage Gyms', to:'/console/admin/gym'},
            {icon:<ManageUserIcon/>, name:'Manage User', to:'/console/admin/user'},
            {icon:<ManageMembershipIcon/>, name:'Manage Membership', to:'/console/admin/membership'},
            {icon:<ReportingIcon/>, name:'Reporting', to:'/console/admin/reporting'}
        ]
    },
    customer:{
        userAvatar:'ST',
        userName:'Cutomer Name',
        userRole:'membership Name',
        dropdownMenu:[
            {name:'Edit Profile', to:'/console/customer/edit'},
            {name:'Logout', to:'/logout'}
        ],
        menu:[
            {icon:<EnrollIcon/>, name:'Enroll ClassName', to:'/console/customer'},
            {icon:<ScanQRIcon/>, name:'Scan QR', to:'/console/customer/membership'}
        ]
    },
    gym:{
        userAvatar:'ST',
        userName:'Strack',
        userRole:'GYM',
        dropdownMenu:[
            {name:'Dashboard', to:'/console/gym'},
            {name:'Logout', to:'/logout'}
        ],
        menu:[
            {icon:<DashboardIcon/>, name:'Dashboard', to:'/console/gym'},
            {icon:<ManageClassIcon/>, name:'Manage class', to:'/console/gym/class'},
            {icon:<ManageTrainerIcon/>, name:'Mange Trainer', to:'/console/gym/trainer'},
            {icon:<ReportingIcon/>, name:'Reporting', to:'/console/gym/report'}
        ]
    },
    trainer:{
        userAvatar:'ST',
        userName:'Trainer Name',
        userRole:'Name',
        dropdownMenu:[
            {name:'Edit Profile', to:'/console/trainer'},
            {name:'Logout', to:'/logout'}
        ],
        menu:[
            {icon:<EditProfileIcon/>, name:'Edit Profile', to:'/console/trainer'},
            {icon:<PayIcon/>, name:'Pay', to:'/console/trainer/pay'}
        ],
    }
}

export default SidebarInfo;