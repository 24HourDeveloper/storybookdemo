import React from 'react'
import IconWithText from './IconWithText'
import  { Home,
          PersonOutline,
          GroupAdd,
          Assessment,
          MenuBook,
          MultilineChartOutlined,
          Search }
from '@material-ui/icons/';


const iconButton = {
  title: 'Icon with text',
  component: IconWithText,
  argTypes: {
    text: { control: 'text' },
  }
}

//export const HomeButton = () => <IconWithText text="Dashboard" icon={<Home />}/>
export const HomeButton = (args) => <IconWithText {...args} icon={<Home />}/>
HomeButton.args = {
  text: 'hello',
};
export const MembersButton = () => <IconWithText text="Members" icon={<PersonOutline />}/>
export const StaffButton = () => <IconWithText text="Staff" icon={<GroupAdd />}/>
export const FormsButton = () => <IconWithText text="Forms" icon={<Assessment />}/>
export const KnowledgeButton = () => <IconWithText text="knowledge Base" icon={<MenuBook />}/>
export const ReportButton = () => <IconWithText text="Reports" icon={<MultilineChartOutlined />}/>
export const SearchButton = () => <IconWithText text="Search" icon={<Search />}/>


export default iconButton;