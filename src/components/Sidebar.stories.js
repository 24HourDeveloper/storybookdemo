import React from 'react'
import Sidebar from './Sidebar'
import Logo from './LogoImage'
import Link from './IconWithText'
import BottomLink from './LinkText'
import UserAvatar from './UserAvatar'
import  { Home,
  PersonOutline,
  GroupAdd,
  Assessment,
  MenuBook,
  MultilineChartOutlined,
  Search }
from '@material-ui/icons/'

const side = {
  title: 'Sidebar',
  compoenent: Sidebar
}

export const noElements = () => <Sidebar />

export const withImage = () => <Sidebar logo={<Logo />} />

export const withImageAndbutton = () => <Sidebar logo={<Logo />} >{<Link text="Dashboard" icon={<Home />} />}</Sidebar>

export const withImageAndAllButtons = () => <Sidebar logo={<Logo />} >
    {
      <>
        <Link text="Dashboard" icon={<Home />} />
        <Link text="Members" icon={<PersonOutline />} />
        <Link text="Staff" icon={<GroupAdd />} />
        <Link text="Forms" icon={<Assessment />} />
        <Link text="Knowledge Base" icon={<MenuBook />} />
        <Link text="Reports" icon={<MultilineChartOutlined />} />
        <Link text="Search" icon={<Search />} />
        <hr style={{width:'90%', borderColor:'black'}}/>
        <BottomLink text="Terms and Conditions" />
        <BottomLink text="Privacy Policy" />

        <UserAvatar />
      </>
    }
  </Sidebar>


export default side;